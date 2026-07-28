<template>
    <article class="news-card">

        <RouterLink :to="`/news/${post.slug}`" class="image">

            <img :src="post.featured_image" :alt="post.title">

        </RouterLink>

        <div class="content">

            <span class="category">
                {{ post.categories?.name }}
            </span>

            <RouterLink :to="`/news/${post.slug}`" class="title">
                {{ post.title }}
            </RouterLink>

            <p class="excerpt">
                {{ post.excerpt }}
            </p>

            <div class="meta">

                <span>
                    <i class="fa-regular fa-calendar"></i>
                    {{ formatDate(post.published_at) }}
                </span>

                <span>
                    <i class="fa-regular fa-clock"></i>
                    {{ post.read_time || 1 }} min read
                </span>

                <span>
                    <i class="fa-regular fa-eye"></i>
                    {{ (post.views || 0).toLocaleString() }}
                </span>

            </div>

        </div>

    </article>
</template>

<script setup>
defineProps({
    post: {
        type: Object,
        required: true
    }
});

const formatDate = (date) => {

    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

};
</script>

<style scoped>
.news-card {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 30px;

    padding-bottom: 32px;
    margin-bottom: 32px;

    border-bottom: 1px solid #e5e7eb;

    transition: .3s ease;
}

.news-card:hover {
    transform: translateY(-3px);
}

.image {
    display: block;
    overflow: hidden;
    border-radius: 14px;
}

.image img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;

    transition: transform .4s ease;
}

.news-card:hover img {
    transform: scale(1.05);
}

.content {
    display: flex;
    flex-direction: column;
}

.category {
    display: inline-flex;
    align-self: flex-start;

    padding: 6px 14px;

    background: #14532d;
    color: #fff;

    border-radius: 30px;

    font-size: .78rem;
    font-weight: 600;

    letter-spacing: .5px;

    margin-bottom: 18px;
}

.title {
    text-decoration: none;

    color: #111827;

    font-family: Georgia, serif;
    font-size: 2rem;
    font-weight: 700;

    line-height: 1.3;

    margin-bottom: 16px;

    transition: color .25s ease;
}

.news-card:hover .title {
    color: #14532d;
}

.excerpt {
    color: #6b7280;

    line-height: 1.85;

    font-size: .98rem;

    margin-bottom: 24px;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    overflow: hidden;
}

.meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 24px;

    margin-top: auto;
}

.meta span {
    display: flex;
    align-items: center;
    gap: 8px;

    color: #6b7280;

    font-size: .9rem;
}

.meta i {
    color: #14532d;
    font-size: .9rem;
}

/* ===========================
   Tablet
=========================== */

@media (max-width: 992px) {

    .news-card {
        grid-template-columns: 1fr;
        gap: 22px;
    }

    .image img {
        height: 260px;
    }

    .title {
        font-size: 1.65rem;
    }

}

/* ===========================
   Mobile
=========================== */

@media (max-width: 768px) {

    .news-card {
        gap: 18px;
        margin-bottom: 28px;
        padding-bottom: 28px;
    }

    .image img {
        height: 220px;
    }

    .title {
        font-size: 1.35rem;
    }

    .excerpt {
        font-size: .93rem;
        line-height: 1.75;
    }

    .meta {
        gap: 16px;
    }

    .meta span {
        font-size: .84rem;
    }

}
</style>