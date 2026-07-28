<template>
    <section class="related-posts">

        <h2>You May Also Like</h2>

        <div class="posts-grid">

            <RouterLink v-for="post in posts" :key="post.id" :to="{ name: 'single-news', params: { slug: post.slug } }"
                class="post-card">

                <img :src="post.featured_image" :alt="post.title">

                <div class="content">

                    <span class="category">
                        {{ post.categories?.name }}
                    </span>

                    <h3>
                        {{ post.title }}
                    </h3>

                    <small>
                        {{ new Date(post.published_at).toLocaleDateString() }}
                    </small>

                </div>

            </RouterLink>

        </div>

    </section>
</template>

<script setup>
defineProps({
    posts: {
        type: Array,
        default: () => []
    }
})
</script>
<style scoped>
.related-posts {
    margin-top: 60px;
}

.related-posts h2 {
    margin-bottom: 30px;
    font-size: 2rem;
    font-family: Georgia, serif;
}

.posts-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.post-card {
    background: #fff;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    transition: .3s;
}

.post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, .08);
}

.post-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}

.content {
    padding: 20px;
}

.category {
    display: inline-block;
    color: #14532d;
    font-size: .85rem;
    font-weight: 600;
    margin-bottom: 10px;
}

.content h3 {
    color: #111827;
    line-height: 1.5;
    margin-bottom: 12px;
}

.content small {
    color: #6b7280;
}

@media(max-width:900px) {
    .posts-grid {
        grid-template-columns: 1fr;
    }
}
</style>