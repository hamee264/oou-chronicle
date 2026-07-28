<template>
    <section v-if="post" class="featured-news">

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

            <p>
                {{ post.excerpt }}
            </p>

            <div class="meta">

                <span>
                    <i class="fa-regular fa-calendar"></i>
                    {{ formatDate(post.published_at) }}
                </span>

                <span>
                    <i class="fa-regular fa-clock"></i>
                    {{ post.read_time }}
                </span>

                <span>
                    <i class="fa-regular fa-eye"></i>
                    {{ post.views }}
                </span>

            </div>

        </div>

    </section>
</template>

<script setup>
defineProps({
    post: Object
})

const formatDate = date => {

    return new Date(date).toLocaleDateString(
        "en-US",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    )

}
</script>

<style scoped>
.featured-news {

    display: grid;
    grid-template-columns: 1.5fr 1fr;

    gap: 35px;

    margin-bottom: 55px;
}

.image {

    display: block;

    overflow: hidden;

    border-radius: 18px;
}

.image img {

    width: 100%;
    height: 450px;

    object-fit: cover;

    transition: .4s;
}

.image:hover img {

    transform: scale(1.05);
}

.content {

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.category {

    color: #14532d;

    font-size: .8rem;

    font-weight: 700;

    text-transform: uppercase;

    margin-bottom: 15px;
}

.title {

    font-family: Georgia, serif;

    font-size: 2.3rem;

    line-height: 1.2;

    text-decoration: none;

    color: #111827;

    font-weight: 700;

    margin-bottom: 18px;

    transition: .3s;
}

.title:hover {

    color: #14532d;
}

.content p {

    color: #6b7280;

    line-height: 1.8;

    margin-bottom: 22px;
}

.meta {

    display: flex;

    gap: 20px;

    flex-wrap: wrap;

    color: #6b7280;
}

.meta span {

    display: flex;

    align-items: center;

    gap: 8px;
}

.meta i {

    color: #14532d;
}

@media(max-width:992px) {

    .featured-news {

        grid-template-columns: 1fr;
    }

    .image img {

        height: 350px;
    }

}

@media(max-width:768px) {

    .title {

        font-size: 1.7rem;
    }

    .image img {

        height: 240px;
    }

}
</style>