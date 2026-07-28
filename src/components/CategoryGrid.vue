<template>
    <div>

        <section class="category-grid">

            <RouterLink v-for="post in posts" :key="post.id" :to="`/news/${post.slug}`" class="news-card">

                <div class="image">
                    <img :src="post.featured_image" :alt="post.title">
                </div>

                <div class="content">

                    <RouterLink v-if="post.categories?.slug" class="category" :to="{
                        name: 'single-category',
                        params: {
                            slug: post.categories.slug
                        }
                    }" @click.stop>
                        {{ post.categories.name }}
                    </RouterLink>

                    <span v-else class="category">
                        {{ post.categories?.name }}
                    </span>

                    <h3 class="title">
                        {{ post.title }}
                    </h3>

                    <p class="excerpt">
                        {{ post.excerpt }}
                    </p>

                    <div class="meta">

                        <span>
                            <i class="fa-regular fa-calendar"></i>
                            {{ new Date(post.published_at).toLocaleDateString() }}
                        </span>

                        <span>
                            <i class="fa-regular fa-clock"></i>
                            {{ post.read_time || 5 }} min read
                        </span>

                    </div>

                </div>

            </RouterLink>

        </section>

        <div v-if="category && totalPosts > 11" class="view-all">

            <RouterLink :to="{
                name: 'single-category',
                params: {
                    slug: category.slug
                }
            }" class="view-all-btn">
                Browse all {{ category.name }} stories

                <i class="fa-solid fa-arrow-right"></i>
            </RouterLink>

        </div>

    </div>
</template>

<script setup>
defineProps({
    posts: {
        type: Array,
        default: () => []
    },

    category: {
        type: Object,
        default: null
    },

    totalPosts: {
        type: Number,
        default: 0
    }
});
</script>

<style scoped>
.category-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}

.news-card {
    display: block;
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    padding-bottom: 26px;

    border-bottom: 1px solid #e5e7eb;

    transition: opacity .25s ease;
}

.news-card:hover {
    opacity: .94;
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

    transition: transform .35s ease;
}

.news-card:hover img {
    transform: scale(1.02);
}

.category {
    display: inline-block;

    margin-bottom: 12px;

    text-decoration: none;

    color: #14532d;

    font-size: .74rem;
    font-weight: 700;

    letter-spacing: 1px;
    text-transform: uppercase;

    transition: color .2s ease;
}

.category:hover {
    color: #0f4425;
}

.title {
    color: #111827;

    font-family: Georgia, serif;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.45;

    margin-bottom: 14px;

    transition: color .2s ease;
}

.news-card:hover .title {
    color: #14532d;
}

.excerpt {
    color: #4b5563;

    font-size: .94rem;
    line-height: 1.75;

    margin-bottom: 20px;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    overflow: hidden;
}

.meta {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 12px;

    color: #6b7280;
    font-size: .82rem;
}

.meta span {
    display: flex;
    align-items: center;
    gap: 6px;
}

.view-all {
    display: flex;
    justify-content: center;

    margin-top: 50px;
}

.view-all-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    text-decoration: none;

    color: #14532d;

    font-size: .95rem;
    font-weight: 600;

    transition: gap .25s ease;
}

.view-all-btn:hover {
    gap: 14px;
}

@media (max-width: 992px) {

    .category-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 28px;
    }

}

@media (max-width: 768px) {

    .category-grid {
        grid-template-columns: 1fr;
        gap: 28px;
    }

    .image img {
        height: 220px;
    }

    .title {
        font-size: 1.1rem;
    }

    .excerpt {
        font-size: .9rem;
    }

    .meta {
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 14px;
    }

}
</style>