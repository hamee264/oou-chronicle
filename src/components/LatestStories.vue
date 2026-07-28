<template>
    <div class="news-layout">

        <article class="featured-card" v-if="featuredStory">

            <RouterLink :to="`/news/${featuredStory.slug}`" class="featured-media">

                <img :src="featuredStory.featured_image" :alt="featuredStory.title">

            </RouterLink>

            <div class="featured-info">

                <span class="category">
                    {{ featuredStory.categories?.name }}
                </span>

                <RouterLink :to="`/news/${featuredStory.slug}`" class="featured-title">
                    {{ featuredStory.title }}
                </RouterLink>

                <p>
                    {{ featuredStory.excerpt }}
                </p>

                <small>

                    <i class="fa-regular fa-calendar" aria-hidden="true"></i>

                    <time :datetime="featuredStory.published_at">{{ formatDate(featuredStory.published_at) }}</time>

                </small>

            </div>

        </article>

        <aside class="stories-list">

            <article v-for="story in sideStories" :key="story.id" class="story-item">

                <RouterLink :to="`/news/${story.slug}`" class="thumb">

                    <img :src="story.featured_image" :alt="story.title" loading="lazy" decoding="async">

                </RouterLink>

                <div class="story-info">

                    <span class="category">
                        {{ story.categories?.name }}
                    </span>

                    <RouterLink :to="`/news/${story.slug}`" class="story-title">

                        {{ story.title }}

                    </RouterLink>

                    <small>
                        <time :datetime="story.published_at">{{ formatDate(story.published_at) }}</time>
                    </small>

                </div>

            </article>

        </aside>

    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    posts: {
        type: Array,
        default: () => []
    }
});

const featuredStory = computed(() => props.posts[1] || null);

const sideStories = computed(() => {
    return props.posts.slice(2, 6);
});

const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Public+Sans:wght@400;500;600&display=swap");

.news-layout {
    --color-green: #14532d;
    --color-green-dark: #0f3d21;
    --color-ink: #111827;
    --color-muted: #6b7280;
    --color-border: #e5e7eb;
    --font-serif: "Fraunces", serif;
    --font-sans: "Public Sans", sans-serif;
    --ease-premium: cubic-bezier(0.4, 0, 0.2, 1);

    width: min(1200px, 92%);

    margin: 80px auto;

    display: grid;

    grid-template-columns: minmax(0, 2fr) 380px;

    gap: 40px;

    align-items: start;
}

/* shared kicker/category style */
.category {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--color-green);
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}

.category::before {
    content: "";
    width: 3px;
    height: 11px;
    background: var(--color-green);
    display: inline-block;
    flex-shrink: 0;
}

/* FEATURED CARD */

.featured-card {
    display: flex;
    flex-direction: column;

    height: 100%;

    overflow: hidden;
    background: #fff;

    border: 1px solid var(--color-border);
    border-radius: 6px;
}

.featured-card:hover,
.featured-card:focus-within {
    border-top-color: var(--color-green);
}

.featured-media {
    display: block;
    aspect-ratio: 16/9;
    overflow: hidden;
}

.featured-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.featured-card:hover img,
.featured-card:focus-within img {
    transform: scale(1.035);
}

.featured-info {
    display: flex;
    flex-direction: column;

    flex: 1;

    padding: 28px;
}

.featured-info small {
    margin-top: auto;

    display: flex;
    align-items: center;
    gap: 8px;

    color: var(--color-muted);
}

.featured-title {
    display: block;
    margin: 18px 0 15px;
    text-decoration: none;
    color: var(--color-ink);
    font-family: var(--font-serif);
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.3;
    background-image: linear-gradient(var(--color-green), var(--color-green));
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 0% 1px;
    padding-bottom: 4px;
    transition: color 0.3s var(--ease-premium), background-size 0.35s var(--ease-premium);
}

.featured-title:hover,
.featured-title:focus-visible {
    color: var(--color-green);
    background-size: 100% 1px;
}

.featured-info p {
    color: var(--color-muted);
    line-height: 1.8;
    margin-bottom: 22px;
}

.featured-info small {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--color-muted);
    font-size: 0.85rem;
}

/* RIGHT COLUMN */
.stories-list {
    position: sticky;
    top: 120px;

    align-self: start;

    display: flex;
    flex-direction: column;
    gap: 22px;
}

.story-item {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    padding-bottom: 22px;
    border-bottom: 1px solid var(--color-border);
}

.story-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.thumb {
    flex-shrink: 0;
    display: block;
    overflow: hidden;
    border-radius: 4px;
}

.thumb img {
    width: 120px;
    height: 90px;
    object-fit: cover;
    display: block;
    transition: transform 0.4s var(--ease-premium);
}

.story-item:hover .thumb img,
.thumb:focus-visible img {
    transform: scale(1.06);
}

.story-info {
    flex: 1;
    min-width: 0;
}

.story-title {
    display: block;
    margin: 10px 0 6px;
    color: var(--color-ink);
    text-decoration: none;
    font-weight: 600;
    line-height: 1.5;
    background-image: linear-gradient(var(--color-green), var(--color-green));
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 0% 1px;
    padding-bottom: 2px;
    transition: color 0.3s var(--ease-premium), background-size 0.3s var(--ease-premium);
}

.story-title:hover,
.story-title:focus-visible {
    color: var(--color-green);
    background-size: 100% 1px;
}

.story-info small {
    color: var(--color-muted);
    font-size: 0.82rem;
}

/* accessibility */
.featured-title:focus-visible,
.story-title:focus-visible,
.thumb:focus-visible,
.featured-media:focus-visible {
    outline: 2px solid var(--color-green);
    outline-offset: 3px;
    border-radius: 2px;
}

@media (max-width: 950px) {

    .news-layout {
        grid-template-columns: 1fr;
    }

    .stories-list {
        position: static;
        margin-top: 35px;
    }

    .featured-card {
        height: auto;
    }

}

@media (max-width: 600px) {

    .news-layout {
        margin: 56px auto;
    }

    .featured-card img {
        height: 240px;
    }

    .featured-info {
        padding: 20px;
    }

    .featured-title {
        font-size: 1.45rem;
    }

    .story-item {
        flex-direction: column;
    }

    .thumb img {
        width: 100%;
        height: 220px;
    }

}

@media(max-width:600px) {

    .story-item {
        display: grid;
        grid-template-columns: 110px 1fr;
        gap: 15px;
        align-items: center;
    }

    .thumb img {
        width: 110px;
        height: 90px;
    }

    .featured-media {
        aspect-ratio: 16/10;
    }

    .featured-title {
        font-size: 1.5rem;
    }
}

@media (prefers-reduced-motion: reduce) {

    .featured-card,
    .featured-card img,
    .featured-title,
    .thumb img,
    .story-title {
        transition: none !important;
    }

}
</style>