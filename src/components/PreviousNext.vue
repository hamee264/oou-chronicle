<template>
    <section class="article-navigation">

        <RouterLink v-if="previousPost" :to="`/news/${previousPost.slug}`" class="nav-card previous">
            <small>
                <i class="fa-solid fa-arrow-left"></i>
                Previous Article
            </small>

            <h4>
                {{ previousPost.title }}
            </h4>
        </RouterLink>

        <RouterLink v-if="nextPost" :to="`/news/${nextPost.slug}`" class="nav-card next">
            <small>
                Next Article
                <i class="fa-solid fa-arrow-right"></i>
            </small>

            <h4>
                {{ nextPost.title }}
            </h4>
        </RouterLink>

    </section>
</template>

<script setup>
defineProps({
    previousPost: {
        type: Object,
        default: null
    },
    nextPost: {
        type: Object,
        default: null
    }
})
</script>

<style scoped>
.article-navigation {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin: 60px 0;
}

.nav-card {
    padding: 28px;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    background: #fff;
    text-decoration: none;
    transition: .3s;
}

.nav-card:hover {
    border-color: #14532d;
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, .08);
}

.nav-card small {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #14532d;
    font-weight: 600;
    margin-bottom: 14px;
}

.previous small {
    justify-content: flex-start;
}

.next small {
    justify-content: flex-end;
}

.nav-card h4 {
    color: #111827;
    font-size: 1.15rem;
    line-height: 1.6;
    font-family: Georgia, serif;
    transition: .3s;
}

.nav-card:hover h4 {
    color: #14532d;
}

.next {
    text-align: right;
}

@media(max-width:768px) {

    .article-navigation {
        grid-template-columns: 1fr;
    }

    .next {
        text-align: left;
    }

    .next small {
        justify-content: flex-start;
    }

}
</style>