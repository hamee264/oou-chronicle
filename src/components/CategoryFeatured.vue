<template>
    <section v-if="post" class="featured-news">

        <RouterLink :to="`/news/${post.slug}`" class="featured-image">
            <img :src="post.featured_image" :alt="post.title">
        </RouterLink>

        <div class="featured-content">

            <p class="category">
                {{ post.categories?.name }}
            </p>

            <RouterLink :to="`/news/${post.slug}`" class="title">
                {{ post.title }}
            </RouterLink>

            <div class="meta">

                <span>
                    <i class="fa-regular fa-calendar"></i>

                    {{ new Date(post.published_at).toLocaleDateString() }}
                </span>

                <span class="dot"></span>

                <span>
                    <i class="fa-regular fa-clock"></i>

                    {{ post.read_time || 5 }} min read
                </span>

            </div>

            <p class="excerpt">
                {{ post.excerpt }}
            </p>

            <RouterLink :to="`/news/${post.slug}`" class="read-more">
                Read Full Story

                <i class="fa-solid fa-arrow-right"></i>
            </RouterLink>

        </div>

    </section>
</template>

<script setup>
defineProps({
    post: {
        type: Object,
        default: null
    }
});
</script>

<style scoped>
.featured-news {
    display: grid;
    grid-template-columns: 1.35fr 1fr;
    gap: 45px;
    align-items: center;
    margin-bottom: 70px;
    padding-bottom: 60px;
    border-bottom: 1px solid #e5e7eb;
}

.featured-image {
    display: block;
    overflow: hidden;
}

.featured-image img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    display: block;
    transition: transform .35s ease;
}

.featured-news:hover img {
    transform: scale(1.02);
}

.category {
    margin-bottom: 14px;

    font-size: .78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;

    color: #14532d;
}

.title {
    display: block;

    text-decoration: none;
    color: #111827;

    font-family: Georgia, serif;
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 1.2;

    margin-bottom: 20px;

    transition: color .25s ease;
}

.title:hover {
    color: #14532d;
}

.meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    margin-bottom: 24px;

    color: #6b7280;
    font-size: .9rem;
}

.meta span {
    display: flex;
    align-items: center;
    gap: 6px;
}

.dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #9ca3af;
}

.excerpt {
    color: #4b5563;
    line-height: 1.9;
    margin-bottom: 30px;
}

.read-more {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    text-decoration: none;

    color: #14532d;

    font-weight: 600;
    font-size: .95rem;

    transition: gap .25s ease;
}

.read-more:hover {
    gap: 14px;
}

@media (max-width: 992px) {

    .featured-news {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .featured-image img {
        height: 360px;
    }

    .title {
        font-size: 2.1rem;
    }

}

@media (max-width: 768px) {

    .featured-news {
        margin-bottom: 50px;
        padding-bottom: 45px;
    }

    .featured-image img {
        height: 260px;
    }

    .title {
        font-size: 1.7rem;
    }

    .excerpt {
        line-height: 1.7;
    }

}
</style>