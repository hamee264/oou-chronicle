<template>

    <section class="results">

        <div class="result-header">

            <h2>Latest Results</h2>

            <small>
                Showing {{ posts.length }} article{{ posts.length !== 1 ? "s" : "" }}
            </small>

        </div>

        <template v-if="posts.length">

            <article class="result-card" v-for="post in posts" :key="post.id">

                <img :src="post.image" :alt="post.title">

                <div class="content">

                    <span>{{ post.category }}</span>

                    <RouterLink :to="`/news/${post.id}`" class="title">
                        {{ post.title }}
                    </RouterLink>

                    <p>
                        {{ post.excerpt }}
                    </p>

                    <small>{{ post.date }}</small>

                </div>

            </article>

        </template>

        <EmptyState v-else title="No Results Found" message="We couldn't find any articles matching your search."
            button-text="Browse News" button-link="/news" />

    </section>

</template>
<script setup>
import { ref } from "vue"

import EmptyState from "./EmptyState.vue"

const posts = ref([
    {
        id: 1,
        title: 'OOU Releases Academic Calendar',
        category: 'Campus',
        date: 'July 19, 2026',
        excerpt: 'The management has approved the new academic calendar.',
        image: '/src/assets/news1.jpg'
    },
    {
        id: 2,
        title: 'Faculty Holds Research Seminar',
        category: 'Academics',
        date: 'July 18, 2026',
        excerpt: 'Students and lecturers presented innovative research.',
        image: '/src/assets/news2.jpg'
    },
    {
        id: 3,
        title: 'Sports Team Wins Championship',
        category: 'Sports',
        date: 'July 17, 2026',
        excerpt: 'The university won another inter-university competition.',
        image: '/src/assets/news3.jpg'
    }
])
</script>

<style scoped>
.results {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.result-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.result-card {
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 25px;

    border: 1px solid #e5e7eb;
    border-radius: 15px;

    overflow: hidden;

    transition: .3s;
}

.result-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, .08);
}

.result-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}

.content {
    padding: 25px;
}

.content span {
    display: inline-block;
    background: #14532d;
    color: white;

    padding: 5px 12px;

    border-radius: 20px;

    font-size: .8rem;
}

.title {
    display: block;

    margin: 18px 0;

    text-decoration: none;

    color: #111827;

    font-size: 1.6rem;

    font-family: Georgia, serif;
}

.title:hover {
    color: #14532d;
}

.content p {
    line-height: 1.8;
    color: #4b5563;
    margin-bottom: 20px;
}

.content small {
    color: #6b7280;
}

@media(max-width:768px) {

    .result-card {
        grid-template-columns: 1fr;
    }

    .result-card img {
        height: 230px;
    }

    .result-header {
        flex-direction: column;
        gap: 8px;
    }

}
</style>