<template>

    <main class="single-news">
        <ReadingProgress />
        <Transition name="page" mode="out-in">

            <div v-if="post" :key="post.id">

                <ArticleHeader :post="post" :views="views" />

                <div class="article-layout">

                    <section class="article-content">

                        <ArticleBody :post="post" />

                        <ArticleTags v-if="post.tags && post.tags.length" :tags="post.tags" />

                        <ShareButtons />

                        <!--
                        <PreviousNext
                            :previous-post="previousPost"
                            :next-post="nextPost"
                        />
                        -->

                        <RelatedPosts v-if="relatedPosts.length" :posts="relatedPosts" />

                        <!-- <CommentSection /> -->

                    </section>

                    <aside class="sidebar">

                        <NewsSidebar />

                    </aside>

                </div>

            </div>

            <section v-else class="loading">

                <div class="spinner"></div>

                <p>Loading article...</p>

            </section>

        </Transition>

    </main>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import supabase from "@/lib/supabase";
import { calculateReadTime } from "@/utils/readTime";
import ArticleHeader from "../components/ArticleHeader.vue";
import ArticleBody from "../components/ArticleBody.vue";
import ShareButtons from "../components/ShareButtons.vue";
import ArticleTags from "../components/ArticleTags.vue";
// import PreviousNext from "../components/PreviousNext.vue";
import RelatedPosts from "../components/RelatedPosts.vue";
import CommentSection from "../components/CommentSection.vue";
import NewsSidebar from "../components/NewsSidebar.vue";
import ReadingProgress from "../components/ReadingProgress.vue";
const route = useRoute();
const views = ref(0);

const post = ref(null);
const relatedPosts = ref([]);
const previousPost = ref(null);
const nextPost = ref(null);

const getPost = async () => {

    post.value = null;

    // Fetch the article first
    const { data, error } = await supabase
        .from("posts")
        .select(`
            *,
            categories(
                id,
                name,
                slug
            ),
            profiles(
                full_name
            )
        `)
        .eq("slug", route.params.slug)
        .single();

    if (error) {
        console.error(error);
        return;
    }

    post.value = data;
    // Dynamic page title

    document.title = `${data.title} | OOU Chronicle`;

    // Meta description

    let description = document.querySelector('meta[name="description"]');

    if (!description) {

        description = document.createElement("meta");

        description.setAttribute("name", "description");

        document.head.appendChild(description);

    }

    description.setAttribute(

        "content",

        data.excerpt ||

        "Read the latest campus news from OOU Chronicle."

    );
    /* ===========================
   SEO
=========================== */

    // Open Graph
    const updatePropertyMeta = (property, content) => {

        let tag = document.querySelector(`meta[property="${property}"]`);

        if (!tag) {

            tag = document.createElement("meta");

            tag.setAttribute("property", property);

            document.head.appendChild(tag);

        }

        tag.setAttribute("content", content);

    };

    // Twitter
    const updateNameMeta = (name, content) => {

        let tag = document.querySelector(`meta[name="${name}"]`);

        if (!tag) {

            tag = document.createElement("meta");

            tag.setAttribute("name", name);

            document.head.appendChild(tag);

        }

        tag.setAttribute("content", content);

    };

    // Canonical
    let canonical = document.querySelector("link[rel='canonical']");

    if (!canonical) {

        canonical = document.createElement("link");

        canonical.rel = "canonical";

        document.head.appendChild(canonical);

    }

    canonical.href = window.location.href;

    // Open Graph
    updatePropertyMeta("og:title", data.title);

    updatePropertyMeta(
        "og:description",
        data.excerpt || "Latest news from OOU Chronicle."
    );

    updatePropertyMeta(
        "og:image",
        data.featured_image
    );

    updatePropertyMeta(
        "og:url",
        window.location.href
    );

    updatePropertyMeta(
        "og:type",
        "article"
    );

    // Twitter
    updateNameMeta(
        "twitter:card",
        "summary_large_image"
    );

    updateNameMeta(
        "twitter:title",
        data.title
    );

    updateNameMeta(
        "twitter:description",
        data.excerpt || ""
    );

    updateNameMeta(
        "twitter:image",
        data.featured_image
    );
    // Calculate read time
    post.value.read_time = calculateReadTime(data.content);

    // Increment view
    await supabase.rpc("increment_post_view", {
        post: data.id
    });

    // Get updated views
    const { data: totalViews } = await supabase.rpc(
        "get_post_views",
        {
            post: data.id
        }
    );

    views.value = totalViews || 0;

    // Related posts
    const { data: related } = await supabase
        .from("posts")
        .select(`
            *,
            categories(
                name,
                slug
            )
        `)
        .eq("status", "published")
        .eq("category_id", data.category_id)
        .neq("id", data.id)
        .order("published_at", {
            ascending: false
        })
        .limit(3);

    relatedPosts.value = related || [];

    // Previous
    const { data: previous } = await supabase
        .from("posts")
        .select(`
            id,
            title,
            slug,
            published_at
        `)
        .lt("published_at", data.published_at)
        .eq("status", "published")
        .order("published_at", {
            ascending: false
        })
        .limit(1)
        .maybeSingle();

    previousPost.value = previous;

    // Next
    const { data: next } = await supabase
        .from("posts")
        .select(`
            id,
            title,
            slug,
            published_at
        `)
        .gt("published_at", data.published_at)
        .eq("status", "published")
        .order("published_at", {
            ascending: true
        })
        .limit(1)
        .maybeSingle();

    nextPost.value = next;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};
watch(

    () => route.params.slug,

    () => {

        getPost();

    },

    {

        immediate: true

    }

);
</script>
<style scoped>
.single-news {
    width: min(1250px, 92%);
    margin: 50px auto 80px;
}

/* ===========================
   Page Transition
=========================== */

.page-enter-active,
.page-leave-active {
    transition: all .35s ease;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    transform: translateY(18px);
}

/* ===========================
   Layout
=========================== */

.article-layout {
    display: grid;
    grid-template-columns: 2.2fr 1fr;
    gap: 50px;
    margin-top: 40px;

    align-items: start;
}

/* Sticky left column */
.article-content {
    display: flex;
    flex-direction: column;
    gap: 45px;

    position: sticky;
    top: 200px;

    align-self: start;

    animation: fadeLeft .6s ease;
}

/* Sidebar scrolls normally */
.sidebar {
    animation: fadeRight .7s ease;
}

/* ===========================
   Loading
=========================== */

.loading {
    min-height: 70vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 18px;
}

.spinner {
    width: 38px;
    height: 38px;

    border: 3px solid #e5e7eb;
    border-top-color: #14532d;

    border-radius: 50%;

    animation: spin .8s linear infinite;
}

.loading p {
    color: #6b7280;
    font-size: .95rem;
}

/* ===========================
   Animations
=========================== */

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes fadeLeft {
    from {
        opacity: 0;
        transform: translateX(-25px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeRight {
    from {
        opacity: 0;
        transform: translateX(25px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* ===========================
   Responsive
=========================== */

@media (max-width: 1100px) {

    .article-layout {
        gap: 35px;
    }

}

@media (max-width: 992px) {

    .article-layout {
        grid-template-columns: 1fr;
    }

    .article-content {
        position: static;
    }

    .sidebar {
        animation: fadeLeft .6s ease;
    }

}

@media (max-width: 768px) {

    .single-news {
        width: 94%;
        margin: 35px auto 60px;
    }

    .article-layout {
        gap: 40px;
        margin-top: 30px;
    }

    .article-content {
        gap: 35px;
    }

    .loading {
        min-height: 60vh;
    }

    .spinner {
        width: 32px;
        height: 32px;
    }

    .loading p {
        font-size: .9rem;
    }

}
</style>