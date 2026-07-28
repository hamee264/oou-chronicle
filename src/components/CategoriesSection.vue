<template>
    <section class="categories-section">

        <div class="section-header">

            <h2>Browse by Category</h2>

            <RouterLink to="/categories">
                View All
            </RouterLink>

        </div>

        <div class="categories-grid">

            <RouterLink v-for="category in categories" :key="category.id" :to="{
                name: 'single-category',
                params: {
                    slug: category.slug
                }
            }" class="category-card">

                <img :src="category.cover_image || categoryImage" :alt="category.name">

                <div class="overlay">

                    <span>
                        {{ category.posts_count }}
                        {{ category.posts_count === 1 ? "Story" : "Stories" }}
                    </span>

                    <h3>
                        {{ category.name }}
                    </h3>

                </div>

            </RouterLink>

        </div>

    </section>
</template>

<script setup>
import categoryImage from "@/assets/images.jpeg";

const props = defineProps({
    categories: {
        type: Array,
        default: () => []
    }
});
import { watchEffect } from "vue";

watchEffect(() => {
    console.log(props.categories);
});
</script>

<style scoped>
.categories-section {
    width: min(1200px, 92%);
    margin: 80px auto;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
}

.section-header h2 {
    font-size: 2rem;
    font-family: Georgia, serif;
    color: #111827;
}

.section-header a {
    color: #14532d;
    font-weight: 600;
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.category-card {
    position: relative;
    overflow: hidden;
    border-radius: 14px;
    cursor: pointer;
}

.category-card img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: .4s;
}

.category-card:hover img {
    transform: scale(1.08);
}

.overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top,
            rgba(0, 0, 0, .75),
            rgba(0, 0, 0, .15));

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 24px;
    color: white;
}

.overlay span {
    font-size: .85rem;
    opacity: .9;
}

.overlay h3 {
    margin-top: 8px;
    font-size: 1.5rem;
}

@media(max-width:900px) {

    .categories-grid {
        grid-template-columns: repeat(2, 1fr);
    }

}

@media(max-width:600px) {

    .categories-grid {
        grid-template-columns: 1fr;
    }

    .category-card img {
        height: 220px;
    }

}
</style>