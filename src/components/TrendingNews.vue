<template>
    <section class="trending-section">

        <div class="section-header">

            <h2>Trending News</h2>

            <RouterLink to="/news">
                View All
            </RouterLink>

        </div>

        <div class="trending-grid">

            <!-- LEFT -->

            <article class="featured-card">

                <RouterLink :to="`/news/${featured.slug}`">

                    <img :src="featured.featured_image" :alt="featured.title">

                </RouterLink>

                <div class="featured-content">

                    <span class="category">

                        {{ featured.categories?.name }}

                    </span>

                    <RouterLink :to="`/news/${featured.slug}`" class="featured-title">

                        {{ featured.title }}

                    </RouterLink>

                    <p>

                        {{ featured.excerpt }}

                    </p>

                    <small>

                        {{ formatDate(featured.published_at) }}

                    </small>

                </div>

            </article>

            <!-- RIGHT -->

            <aside class="ranking">

                <article v-for="(post, index) in ranking" :key="post.id" class="ranking-item">

                    <span class="number">

                        {{ String(index + 1).padStart(2, '0') }}

                    </span>

                    <div>

                        <span class="category">

                            {{ post.categories?.name }}

                        </span>

                        <RouterLink :to="`/news/${post.slug}`" class="ranking-title">

                            {{ post.title }}

                        </RouterLink>

                        <small>

                            {{ formatDate(post.published_at) }}

                        </small>

                    </div>

                </article>

            </aside>

        </div>

    </section>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
    posts: {
        type: Array,
        default: () => []
    }
})

const featured = computed(() => props.posts[0] || {})

const ranking = computed(() => props.posts.slice(1, 5))

const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}
</script>
<style scoped>
.trending-section {

    width: min(1200px, 92%);
    margin: 90px auto;
}

.section-header {

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 35px;
}

.section-header h2 {

    font-size: 2.4rem;
    font-family: Georgia, serif;
}

.section-header a {

    color: #14532d;
    font-weight: 700;
    text-decoration: none;
}

.trending-grid {

    display: grid;
    grid-template-columns: minmax(0, 2fr) 380px;

    gap: 45px;

    align-items: start;
}

.featured-card {

    border: 1px solid #ececec;

    overflow: hidden;

    background: #fff;

    border-radius: 8px;
}

.featured-card img {

    width: 100%;

    height: 470px;

    object-fit: cover;

    display: block;
}

.featured-content {

    padding: 28px;
}

.featured-title {

    display: block;

    margin: 15px 0;

    color: #111827;

    font-size: 2rem;

    font-family: Georgia, serif;

    line-height: 1.3;

    text-decoration: none;
}

.featured-title:hover {

    color: #14532d;
}

.featured-content p {

    color: #6b7280;

    line-height: 1.8;

    margin-bottom: 18px;
}

.ranking {

    position: sticky;

    top: 110px;

    display: flex;

    flex-direction: column;
}

.ranking-item {

    display: flex;

    gap: 20px;

    min-height: 117px;

    align-items: center;

    padding: 18px 0;

    border-bottom: 1px solid #ececec;

    transition: .3s;
}

.ranking-item:hover {

    transform: translateX(6px);
}

.number {

    width: 60px;

    flex-shrink: 0;

    font-size: 3rem;

    font-weight: 800;

    color: #e5e7eb;

    line-height: 1;
}

.ranking-title {

    display: block;

    margin: 10px 0;

    color: #111827;

    text-decoration: none;

    font-weight: 700;

    line-height: 1.45;
}

.ranking-title:hover {

    color: #14532d;
}

.category {

    display: inline-block;

    background: #14532d;

    color: #fff;

    padding: 5px 12px;

    border-radius: 30px;

    font-size: .72rem;

    font-weight: 600;
}

@media(max-width:992px) {

    .trending-grid {

        grid-template-columns: 1fr;
    }

    .ranking {

        position: static;

        margin-top: 35px;
    }

    .featured-card img {

        height: 320px;
    }

}

@media(max-width:600px) {

    .section-header {

        flex-direction: column;

        align-items: flex-start;

        gap: 15px;
    }

    .featured-card img {

        height: 240px;
    }

    .featured-title {

        font-size: 1.45rem;
    }

    .number {

        width: 45px;

        font-size: 2rem;
    }

    .ranking-item {

        min-height: 95px;
    }

}
</style>