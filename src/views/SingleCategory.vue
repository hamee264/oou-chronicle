<template>
    <main class="single-category">

        <!-- Loading -->
        <div v-if="loading" class="loading">
            <div class="spinner"></div>
            <p>Loading stories...</p>
        </div>

        <!-- Category Not Found -->
        <section v-else-if="!category" class="not-found">

            <i class="fa-regular fa-folder-open"></i>

            <h2>Category Not Found</h2>

            <p>
                The category you're looking for doesn't exist or has no published stories.
            </p>

            <RouterLink to="/categories" class="back-btn">
                Back to Categories
            </RouterLink>

        </section>

        <!-- Content -->
        <section v-else>

            <!-- Breadcrumb -->

            <nav class="breadcrumb">

                <RouterLink to="/">
                    Home
                </RouterLink>

                <i class="fa-solid fa-angle-right"></i>

                <RouterLink to="/categories">
                    Categories
                </RouterLink>

                <i class="fa-solid fa-angle-right"></i>

                <span>{{ category.name }}</span>

            </nav>

            <!-- Header -->

            <header class="page-header">

                <p class="label">
                    Category
                </p>

                <h1>
                    {{ category.name }}
                </h1>

                <p class="count">
                    {{ posts.length }}
                    {{ posts.length === 1 ? "Story" : "Stories" }}
                </p>

            </header>

            <!-- Posts -->

            <section class="posts-grid">

                <RouterLink v-for="post in visiblePosts" :key="post.id" :to="`/news/${post.slug}`" class="post-card">

                    <div class="image">

                        <img :src="post.featured_image" :alt="post.title">

                    </div>

                    <div class="content">

                        <small>

                            <i class="fa-regular fa-calendar"></i>

                            {{ new Date(post.published_at).toLocaleDateString() }}

                        </small>

                        <h3>

                            {{ post.title }}

                        </h3>

                        <p>

                            {{ post.excerpt }}

                        </p>

                    </div>

                </RouterLink>

            </section>

            <!-- Load More -->

            <div v-if="visiblePosts.length < posts.length" class="load-more">

                <button @click="loadMore">

                    Load More Stories

                </button>

            </div>

        </section>

    </main>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import supabase from "@/lib/supabase";

const route = useRoute();

const category = ref(null);
const posts = ref([]);
const loading = ref(true);

const limit = ref(12);

const visiblePosts = computed(() => {
    return posts.value.slice(0, limit.value);
});

const loadMore = () => {
    limit.value += 12;
};

const fetchCategory = async () => {

    loading.value = true;

    const { data: categoryData } = await supabase
        .from("categories")
        .select("*")
        .eq("slug", route.params.slug)
        .single();

    if (!categoryData) {

        category.value = null;
        posts.value = [];
        loading.value = false;
        return;

    }

    category.value = categoryData;

    const { data: postData } = await supabase
        .from("posts")
        .select(`
            *,
            categories(
                name,
                slug
            )
        `)
        .eq("category_id", categoryData.id)
        .eq("status", "published")
        .order("published_at", {
            ascending: false
        });

    posts.value = postData || [];

    loading.value = false;
};

watch(
    () => route.params.slug,
    () => {
        limit.value = 12;
        fetchCategory();
    }
);

onMounted(fetchCategory);
</script>
<style scoped>
.single-category {
    width: min(1200px, 92%);
    margin: 40px auto 80px;
}

/* Loading */

.loading {
    min-height: 60vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 18px;
}

.spinner {
    width: 36px;
    height: 36px;

    border: 3px solid #e5e7eb;
    border-top-color: #14532d;

    border-radius: 50%;

    animation: spin .8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.loading p {
    color: #6b7280;
}

/* Not Found */

.not-found {
    min-height: 60vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
}

.not-found i {
    font-size: 3rem;
    color: #14532d;
    margin-bottom: 18px;
}

.not-found h2 {
    font-size: 2rem;
    margin-bottom: 12px;
    color: #111827;
}

.not-found p {
    color: #6b7280;
    max-width: 460px;
    line-height: 1.8;
    margin-bottom: 28px;
}

.back-btn {
    display: inline-flex;
    align-items: center;

    padding: 12px 22px;

    background: #14532d;
    color: #fff;

    text-decoration: none;
    border-radius: 6px;

    transition: .25s;
}

.back-btn:hover {
    background: #0f4425;
}

/* Breadcrumb */

.breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 10px;

    font-size: .92rem;

    margin-bottom: 25px;
}

.breadcrumb a {
    color: #14532d;
    text-decoration: none;
}

.breadcrumb span {
    color: #6b7280;
}

.breadcrumb i {
    color: #9ca3af;
    font-size: .75rem;
}

/* Header */

.page-header {
    padding-bottom: 30px;
    margin-bottom: 45px;

    border-bottom: 1px solid #e5e7eb;
}

.label {
    color: #14532d;

    font-size: .82rem;
    font-weight: 700;

    text-transform: uppercase;
    letter-spacing: 1px;

    margin-bottom: 12px;
}

.page-header h1 {
    font-family: Georgia, serif;
    font-size: 3rem;
    color: #111827;
    margin-bottom: 14px;
}

.count {
    color: #6b7280;
    font-size: 1rem;
}

/* Grid */

.posts-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 34px;
}

/* Cards */

.post-card {
    display: block;

    text-decoration: none;
    color: inherit;

    border-bottom: 1px solid #ececec;

    padding-bottom: 24px;

    transition: transform .25s ease;
}

.post-card:hover {
    transform: translateY(-3px);
}

.image {
    overflow: hidden;
    margin-bottom: 18px;
}

.image img {
    width: 100%;
    height: 230px;

    object-fit: cover;
    display: block;

    transition: transform .45s ease;
}

.post-card:hover img {
    transform: scale(1.04);
}

.content small {
    display: inline-flex;
    align-items: center;

    gap: 8px;

    color: #6b7280;
    margin-bottom: 14px;
}

.content h3 {
    font-family: Georgia, serif;

    font-size: 1.35rem;
    line-height: 1.4;

    color: #111827;

    margin-bottom: 14px;

    transition: color .25s;
}

.post-card:hover h3 {
    color: #14532d;
}

.content p {
    color: #4b5563;
    line-height: 1.8;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    overflow: hidden;
}

/* Load More */

.load-more {
    display: flex;
    justify-content: center;

    margin-top: 55px;
}

.load-more button {
    padding: 14px 30px;

    border: none;

    background: #14532d;
    color: #fff;

    border-radius: 6px;

    cursor: pointer;

    font-size: .95rem;
    font-weight: 600;

    transition: .25s;
}

.load-more button:hover {
    background: #0f4425;
}

/* Fade Animation */

.post-card {
    opacity: 0;
    transform: translateY(24px);

    animation: fadeUp .5s ease forwards;
}

.post-card:nth-child(2) {
    animation-delay: .08s;
}

.post-card:nth-child(3) {
    animation-delay: .16s;
}

.post-card:nth-child(4) {
    animation-delay: .24s;
}

.post-card:nth-child(5) {
    animation-delay: .32s;
}

.post-card:nth-child(6) {
    animation-delay: .40s;
}

@keyframes fadeUp {

    from {
        opacity: 0;
        transform: translateY(24px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}

/* Responsive */

@media (max-width: 992px) {

    .posts-grid {
        grid-template-columns: repeat(2, 1fr);
    }

}

@media (max-width: 768px) {

    .single-category {
        width: 94%;
    }

    .page-header h1 {
        font-size: 2.3rem;
    }

    .posts-grid {
        grid-template-columns: 1fr;
        gap: 28px;
    }

    .image img {
        height: 220px;
    }

}
</style>