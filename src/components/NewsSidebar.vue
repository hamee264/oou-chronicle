<template>
    <aside class="sidebar">

        <!-- Editorial Quote -->
        <section class="quote-widget">

            <span class="quote-tag">
                OOU Chronicle
            </span>

            <p class="quote">
                “Journalism is the first rough draft of history.”
            </p>

            <span class="quote-author">
                — Philip L. Graham
            </span>

        </section>

        <!-- Latest Stories -->
        <section class="widget">

            <div class="widget-header">

                <h3 class="widget-title">
                    Latest Stories
                </h3>

                <RouterLink to="/news" class="view-all">
                    View all
                </RouterLink>

            </div>

            <RouterLink v-for="post in recentPosts" :key="post.id" :to="`/news/${post.slug}`" class="post-item">

                <img :src="post.featured_image" :alt="post.title">

                <div class="post-content">

                    <h4>
                        {{ post.title }}
                    </h4>

                    <small>
                        <i class="fa-regular fa-calendar"></i>

                        {{ formatDate(post.published_at) }}
                    </small>

                </div>

            </RouterLink>

        </section>

        <!-- Categories -->
        <!-- Browse Topics -->


        <!-- Trending -->
        <section class="widget">

            <div class="widget-header">

                <h3 class="widget-title">
                    Trending Stories
                </h3>

            </div>

            <RouterLink v-for="post in popularPosts" :key="post.id" :to="`/news/${post.slug}`" class="post-item">

                <img :src="post.featured_image" :alt="post.title">

                <div class="post-content">

                    <h4>

                        {{ post.title }}

                    </h4>

                    <small>

                        <i class="fa-regular fa-eye"></i>

                        {{ post.views }}

                        Views

                    </small>

                </div>

            </RouterLink>

        </section>

        <!-- Advertisement -->
        <section class="widget advert">

            <span class="ad-badge">

                Advertisement

            </span>

            <h3>

                Promote Your Brand To Thousands Of OOU Students

            </h3>

            <p>

                Reach students across campus through OOU Chronicle.

            </p>

            <RouterLink to="/contact" class="btn">

                Advertise Now

            </RouterLink>

        </section>

    </aside>
</template>
<script setup>
import { ref, onMounted } from "vue";
import supabase from "@/lib/supabase";

const recentPosts = ref([]);
const popularPosts = ref([]);
const categories = ref([]);

const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
};

const getSidebarData = async () => {

    /* -------------------------
       Latest Stories
    -------------------------- */

    const { data: recent } = await supabase
        .from("posts")
        .select(`
            id,
            title,
            slug,
            featured_image,
            published_at
        `)
        .eq("status", "published")
        .order("published_at", {
            ascending: false
        })
        .limit(5);

    recentPosts.value = recent || [];

    /* -------------------------
       Categories
    -------------------------- */

    const { data: cats } = await supabase
        .from("categories")
        .select(`
        id,
        name,
        slug,
        posts(id)
    `)
        .order("name");

    categories.value = cats || [];

    /* -------------------------
       Trending Stories
    -------------------------- */

    const { data: posts } = await supabase
        .from("posts")
        .select(`
            id,
            title,
            slug,
            featured_image
        `)
        .eq("status", "published");

    const postsWithViews = await Promise.all(

        (posts || []).map(async (post) => {

            const { data: totalViews } = await supabase.rpc(
                "get_post_views",
                {
                    post: post.id
                }
            );

            return {
                ...post,
                views: totalViews || 0
            };

        })

    );

    popularPosts.value = postsWithViews
        .sort((a, b) => b.views - a.views)
        .slice(0, 5);

};

onMounted(() => {
    getSidebarData();
});
</script>
<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    gap: 28px;
    position: sticky;
    top: 100px;
}

/* ==========================
   Editorial Quote
========================== */

.quote-widget {
    position: relative;
    overflow: hidden;

    padding: 36px 30px;

    border-radius: 22px;

    background: linear-gradient(135deg, #14532d, #166534);

    color: #fff;

    box-shadow: 0 18px 45px rgba(20, 83, 45, .18);
}

.quote-widget::before {
    content: "“";

    position: absolute;

    top: -55px;
    left: 8px;

    font-family: Georgia, serif;

    font-size: 11rem;

    color: rgba(255, 255, 255, .08);

    line-height: 1;
}

.quote-tag {
    display: inline-block;

    padding: 7px 14px;

    background: rgba(255, 255, 255, .15);

    border-radius: 999px;

    font-size: .78rem;

    letter-spacing: 1px;

    text-transform: uppercase;

    margin-bottom: 18px;
}

.quote {
    position: relative;
    z-index: 2;

    font-family: Georgia, serif;

    font-size: 2rem;

    font-style: italic;

    line-height: 1.45;

    margin: 0;
}

.quote-author {
    display: block;

    margin-top: 22px;

    opacity: .85;

    letter-spacing: 1px;

    text-transform: uppercase;

    font-size: .8rem;
}

/* ==========================
   Widgets
========================== */

.widget {
    background: #fff;

    border: 1px solid #e5e7eb;

    border-radius: 18px;

    padding: 24px;

    box-shadow: 0 8px 30px rgba(0, 0, 0, .05);

    transition: .35s ease;
}

.widget:hover {
    transform: translateY(-4px);

    box-shadow: 0 18px 45px rgba(0, 0, 0, .08);
}

.widget-header {
    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 20px;
}

.widget-title {
    position: relative;

    font-size: 1.15rem;

    color: #111827;

    padding-bottom: 10px;
}

.widget-title::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: 0;

    width: 55px;
    height: 3px;

    background: #14532d;

    border-radius: 999px;
}

.view-all {
    text-decoration: none;

    color: #14532d;

    font-size: .85rem;

    font-weight: 600;
}

.view-all:hover {
    text-decoration: underline;
}

/* ==========================
   Posts
========================== */

.post-item {
    display: flex;

    gap: 15px;

    padding: 10px;

    border-radius: 12px;

    text-decoration: none;

    color: inherit;

    transition: .3s;

    margin-bottom: 12px;
}

.post-item:last-child {
    margin-bottom: 0;
}

.post-item:hover {
    background: #f8fafc;
}

.post-item img {
    width: 85px;

    height: 72px;

    object-fit: cover;

    border-radius: 12px;

    transition: .35s;
}

.post-item:hover img {
    transform: scale(1.07);
}

.post-content {
    flex: 1;
}

.post-content h4 {
    color: #111827;

    font-size: .95rem;

    line-height: 1.45;

    margin-bottom: 8px;

    transition: .3s;
}

.post-item:hover h4 {
    color: #14532d;
}

.post-content small {
    display: flex;

    align-items: center;

    gap: 6px;

    color: #6b7280;

    font-size: .82rem;
}

/* ==========================
   Categories
========================== */



.category-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-decoration: none;

    color: #111827;

    padding: 14px 0;

    border-bottom: 1px solid #f1f5f9;

    transition: .3s;
}

.category-item:last-child {
    border-bottom: none;
}

.category-item:hover {
    color: #14532d;
    transform: translateX(6px);
}

.count {

    min-width: 34px;
    height: 26px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #14532d;
    color: #fff;

    border-radius: 999px;

    font-size: .75rem;
    font-weight: 600;

}

/* ==========================
   Advertisement
========================== */

.advert {
    position: relative;

    overflow: hidden;

    background: linear-gradient(135deg, #14532d, #166534);

    color: white;

    border: none;

    text-align: center;
}

.advert::before {
    content: "";

    position: absolute;

    top: -60px;
    right: -60px;

    width: 180px;
    height: 180px;

    border-radius: 50%;

    background: rgba(255, 255, 255, .08);
}

.ad-badge {
    display: inline-block;

    padding: 6px 12px;

    margin-bottom: 18px;

    border-radius: 999px;

    background: rgba(255, 255, 255, .15);

    font-size: .75rem;

    letter-spacing: 1px;

    text-transform: uppercase;
}

.advert h3 {
    position: relative;

    z-index: 2;

    font-size: 1.35rem;

    margin-bottom: 14px;

    line-height: 1.4;
}

.advert p {
    position: relative;

    z-index: 2;

    opacity: .92;

    line-height: 1.7;
}

.btn {
    position: relative;

    z-index: 2;

    display: inline-block;

    margin-top: 24px;

    padding: 12px 28px;

    background: white;

    color: #14532d;

    text-decoration: none;

    font-weight: 700;

    border-radius: 999px;

    transition: .3s;
}

.btn:hover {
    transform: translateY(-3px);

    background: #f9fafb;
}

/* ==========================
   Responsive
========================== */

@media (max-width: 992px) {

    .sidebar {
        position: static;
        margin-top: 20px;
    }

}

@media (max-width: 768px) {

    .widget,
    .quote-widget {
        padding: 22px;
    }

    .quote {
        font-size: 1.6rem;
    }

    .post-item img {
        width: 80px;
        height: 68px;
    }

}
</style>