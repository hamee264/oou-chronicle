<script setup>
import { ref, onMounted } from "vue";
import supabase from "@/lib/supabase";

import CategoryHero from "../components/CategoryHero.vue";
import CategoryTabs from "../components/CategoryTabs.vue";
import CategoryFeatured from "../components/CategoryFeatured.vue";
import CategoryGrid from "../components/CategoryGrid.vue";

const categories = ref([]);
const posts = ref([]);
const displayedPosts = ref([]);
const activeCategory = ref(null);
const loading = ref(true);

const shufflePosts = (items, limit = 11) => {
    const shuffled = [...items];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, limit);
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

const getPosts = async () => {
    const { data, error } = await supabase
        .from("posts")
        .select(`
    *,
    categories(
        id,
        name,
        slug
    )
`)
        .eq("status", "published")
        .order("published_at", { ascending: false });

    if (error) {
        console.error(error);
        return;
    }

    posts.value = data || [];
    console.log(posts.value);
    displayedPosts.value = shufflePosts(posts.value);
};

const changeCategory = (category) => {
    activeCategory.value = category;

    if (!category) {
        displayedPosts.value = shufflePosts(posts.value);
        return;
    }

    displayedPosts.value = posts.value.filter(
        post => post.category_id === category.id
    );
};

onMounted(async () => {
    loading.value = true;

    await Promise.all([
        getCategories(),
        getPosts()
    ]);

    loading.value = false;
});
</script>

<template>
    <main class="categories-page">

        <CategoryHero />

        <CategoryTabs :categories="categories" :active-category="activeCategory" @change-category="changeCategory" />

        <template v-if="loading">
            <section class="loading-state">
                <div class="spinner"></div>
                <p>Loading articles...</p>
            </section>
        </template>

        <template v-else-if="displayedPosts.length">

            <CategoryFeatured :post="displayedPosts[0]" :category="activeCategory" />

            <CategoryGrid :posts="displayedPosts.slice(1, 11)" :category="activeCategory"
                :total-posts="displayedPosts.length" />
        </template>

        <section v-else class="empty-state">

            <i class="fa-regular fa-folder-open"></i>

            <h3>No articles found</h3>

            <p>
                There are no published articles in this category yet.
                Please check back later.
            </p>

        </section>

    </main>
</template>

<style scoped>
.categories-page {
    width: min(1250px, 92%);
    margin: 40px auto 80px;
}

.loading-state,
.empty-state {
    padding: 70px 0;
    text-align: center;
}

.loading-state p,
.empty-state p {
    color: #6b7280;
    font-size: 15px;
    line-height: 1.7;
    max-width: 450px;
    margin: 0 auto;
}

.empty-state i {
    font-size: 42px;
    color: #14532d;
    margin-bottom: 18px;
}

.empty-state h3 {
    font-size: 28px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 12px;
}

.loading-state,
.empty-state {
    padding: 70px 0;
    text-align: center;
}

.spinner {
    width: 32px;
    height: 32px;
    margin: 0 auto 18px;
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

.loading-state p,
.empty-state p {
    color: #6b7280;
    font-size: 15px;
    line-height: 1.7;
    max-width: 450px;
    margin: 0 auto;
}

.empty-state i {
    font-size: 42px;
    color: #14532d;
    margin-bottom: 18px;
}

.empty-state h3 {
    font-size: 28px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 12px;
}

@media (max-width: 768px) {

    .loading-state,
    .empty-state {
        padding: 50px 0;
    }

    .spinner {
        width: 28px;
        height: 28px;
    }

    .empty-state h3 {
        font-size: 24px;
    }

    .empty-state i {
        font-size: 36px;
    }

    .loading-state p,
    .empty-state p {
        font-size: 14px;
    }
}

@media (max-width: 768px) {
    .categories-page {
        width: 94%;
        margin: 24px auto 60px;
    }

    .loading-state,
    .empty-state {
        padding: 50px 0;
    }

    .empty-state h3 {
        font-size: 24px;
    }

    .empty-state i {
        font-size: 36px;
    }

    .loading-state p,
    .empty-state p {
        font-size: 14px;
    }
}
</style>