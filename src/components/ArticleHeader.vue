<template>
    <section class="article-header">

        <!-- Breadcrumb -->
        <div class="breadcrumb">
            <RouterLink to="/">Home</RouterLink>

            <i class="fa-solid fa-angle-right"></i>

            <RouterLink to="/news">News</RouterLink>

            <i class="fa-solid fa-angle-right"></i>

            <span>{{ post.categories?.name }}</span>
        </div>

        <!-- Category -->
        <span class="category">

            {{ post.categories?.name }}

        </span>

        <!-- Title -->
        <h1>
            {{ post.title }}
        </h1>

        <!-- Meta -->
        <div class="meta">

            <div class="author">

                <img :src="logo" alt="OOU Chronicle">
                <div>

                    <strong>
                        {{ post.profiles?.full_name || "OOU Chronicle" }}
                    </strong>

                    <small>Editorial Team</small>

                </div>

            </div>

            <div class="article-info">

                <span>
                    <i class="fa-regular fa-calendar"></i>

                    {{ formatDate(post.published_at) }}
                </span>

                <span>
                    <i class="fa-regular fa-clock"></i>

                    {{ post.read_time }} min read
                </span>

                <span>
                    <i class="fa-regular fa-eye"></i>

                    {{ (views || 0).toLocaleString() }} Views
                </span>

            </div>

        </div>

        <!-- Featured Image -->
        <div class="featured-image">

            <img :src="post.featured_image" :alt="post.title">

        </div>

    </section>
</template>

<script setup>
import logo from "@/assets/images.jpeg";

defineProps({
    post: {
        type: Object,
        required: true
    },
    views: {
        type: Number,
        default: 0
    }
});

const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
};
</script>
<style scoped>
.article-header {
    margin-bottom: 40px;
    animation: fadeUp .5s ease;
}

.breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 18px;
    font-size: .9rem;
}

.breadcrumb a {
    color: #14532d;
    text-decoration: none;
    font-weight: 600;
    transition: color .2s;
}

.breadcrumb a:hover {
    color: #0f4425;
}

.breadcrumb span {
    color: #6b7280;
}

.breadcrumb i {
    font-size: .7rem;
    color: #9ca3af;
}

.category {
    display: inline-block;
    margin-bottom: 14px;

    color: #14532d;

    font-size: .82rem;
    font-weight: 700;

    letter-spacing: 1px;
    text-transform: uppercase;

    background: none;
    padding: 0;
    border-radius: 0;
}

.article-header h1 {
    margin: 0 0 22px;

    font-family: Georgia, serif;
    font-size: clamp(2.4rem, 5vw, 4rem);
    line-height: 1.15;
    font-weight: 700;

    color: #111827;
}

.meta {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 20px;
    flex-wrap: wrap;

    padding-bottom: 26px;
    margin-bottom: 30px;

    border-bottom: 1px solid #e5e7eb;
}

.author {
    display: flex;
    align-items: center;
    gap: 14px;
}

.author img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    object-fit: cover;
}

.author strong {
    display: block;
    color: #111827;
    font-size: .98rem;
}

.author small {
    color: #6b7280;
    font-size: .85rem;
}

.article-info {
    display: flex;
    align-items: center;
    gap: 22px;
    flex-wrap: wrap;
}

.article-info span {
    display: flex;
    align-items: center;
    gap: 8px;

    color: #6b7280;
    font-size: .92rem;
}

.article-info i {
    color: #14532d;
}

.featured-image {
    overflow: hidden;
    border-radius: 12px;
}

.featured-image img {
    width: 100%;
    height: 560px;
    object-fit: cover;
    display: block;
    transition: transform .35s ease;
}

.featured-image:hover img {
    transform: scale(1.02);
}

@keyframes fadeUp {

    from {
        opacity: 0;
        transform: translateY(18px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}

@media (max-width: 992px) {

    .featured-image img {
        height: 420px;
    }

}

@media (max-width: 768px) {

    .article-header {
        margin-bottom: 30px;
    }

    .meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 18px;
    }

    .article-info {
        gap: 16px;
    }

    .featured-image img {
        height: 260px;
    }

}
</style>