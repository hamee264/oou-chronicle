<template>
    <main class="news-page">

        <NewsHeader />
        <FeaturedNews :post="featuredPost" />
        <NewsFilters :categories="categories" @search="handleSearch" @filter="handleFilters" />

        <section class="news-content">

            <div class="articles">

                <template v-if="loading">

                    <div class="loading">

                        <div class="spinner"></div>

                        <p>Loading articles...</p>

                    </div>

                </template>

                <template v-else-if="posts.length">

                    <NewsCard
    v-for="post in paginatedPosts"
    :key="post.id"
    :post="post"
/>
                    <Pagination v-if="totalPages > 1" :current-page="currentPage" :total-pages="totalPages"
                        @change-page="changePage" />

                </template>

                <template v-else>

                    <div class="empty">

                        <h3>No articles found</h3>

                        <p>
                            There are no published articles yet.
                        </p>

                    </div>

                </template>

            </div>

            <NewsSidebar />

        </section>

    </main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import supabase from "@/lib/supabase";
import FeaturedNews from "../components/FeaturedNews.vue";
import NewsHeader from "../components/NewsHeader.vue";
import NewsFilters from "../components/NewsFilters.vue";
import NewsCard from "../components/NewsCard.vue";
import NewsSidebar from "../components/NewsSidebar.vue";
import Pagination from "../components/Pagination.vue";
const featuredPost = computed(() => allPosts.value[0] || null)

const loading = ref(false);

const categories = ref([]);

const allPosts = ref([]);
const posts = ref([]);

const searchQuery = ref("");
const selectedCategory = ref("");
const sortBy = ref("newest");

/* Pagination */

const currentPage = ref(1);
const perPage = 3;

function calculateReadTime(content) {

    if (!content) return "1 min read";

    const plainText = content
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    const words = plainText.split(" ").filter(Boolean).length;

    const minutes = Math.max(1, Math.ceil(words / 200));

    return `${minutes} min read`;

}

const getPosts = async () => {

    loading.value = true;

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
        .eq("status", "published");

    if (error) {

        console.error(error);
        loading.value = false;
        return;

    }

    const postsWithViews = await Promise.all(

        (data || []).map(async (post) => {

            const { data: totalViews } = await supabase.rpc(
                "get_post_views",
                {
                    post: post.id
                }
            );

            return {

                ...post,
                views: totalViews || 0,
                read_time: calculateReadTime(post.content)

            };

        })

    );

    allPosts.value = postsWithViews;

    filterPosts();

    loading.value = false;

};

const getCategories = async () => {

    const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name");

    if (error) {

        console.error(error);
        return;

    }

    categories.value = data || [];

};

const filterPosts = () => {

    let filtered = [...allPosts.value];

    // Search

    if (searchQuery.value.trim()) {

        const keyword = searchQuery.value.toLowerCase();

        filtered = filtered.filter(post =>

            post.title.toLowerCase().includes(keyword) ||

            (post.excerpt || "")
                .toLowerCase()
                .includes(keyword)

        );
        console.log("Posts:", posts.value.length);
console.log("Pages:", totalPages.value);
    }

    // Category

    if (selectedCategory.value) {

        filtered = filtered.filter(

            post => post.category_id === selectedCategory.value

        );

    }

    // Sort

    filtered.sort((a, b) => {

        const dateA = new Date(
            a.published_at || a.created_at
        );

        const dateB = new Date(
            b.published_at || b.created_at
        );

        return sortBy.value === "oldest"
            ? dateA - dateB
            : dateB - dateA;

    });

    posts.value = filtered;

    currentPage.value = 1;

};

const handleSearch = (value) => {

    searchQuery.value = value;

    filterPosts();

};

const handleFilters = (filters) => {

    selectedCategory.value = filters.category;

    sortBy.value = filters.sort;

    filterPosts();

};

/* Pagination */

const totalPages = computed(() =>

    Math.ceil(posts.value.length / perPage)

);

const paginatedPosts = computed(() => {

    const start =

        (currentPage.value - 1) * perPage;

    return posts.value.slice(

        start,

        start + perPage

    );

});

const changePage = (page) => {

    currentPage.value = page;

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

onMounted(async () => {

    await Promise.all([

        getPosts(),

        getCategories()

    ]);

});
</script>

<style scoped>

.news-page {
    width: min(1250px, 92%);
    margin: 40px auto 80px;
}

.news-content {
    display: grid;
    grid-template-columns: 2.2fr 1fr;
    gap: 40px;
    margin-top: 40px;
}

.articles {
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: sticky;

    top: 200px;

    align-self: start;
}

.loading {
    min-height: 420px;

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

.empty {
    min-height: 420px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
}

.empty h3 {
    color: #111827;
    margin-bottom: 10px;
}

.empty p {
    color: #6b7280;
}

@keyframes spin {

    to {
        transform: rotate(360deg);
    }

}

@media (max-width: 992px) {

    .news-content {
        grid-template-columns: 1fr;
    }

}

@media (max-width: 768px) {

    .news-page {
        width: 94%;
        margin: 30px auto 60px;
    }

}
</style>