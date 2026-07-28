<template>

    <section class="hero-wrapper">

        <div class="hero-intro">

            <span class="section-tag">
                OOU CHRONICLE
            </span>

            <h2>
                Campus News That Matters
            </h2>

            <p>
                Bringing you trusted campus news, student stories, academic updates, sports, events and everything
                happening across Olabisi Onabanjo University and its surrounding communities.
            </p>

        </div>

        <section class="hero" v-if="featuredPost">

            <div class="hero-image">

                <img :src="featuredPost.featured_image" :alt="featuredPost.title">

            </div>

            <div class="hero-content">

                <span class="category">
                    {{ featuredPost.categories?.name }}
                </span>

                <h1>
                    {{ featuredPost.title }}
                </h1>

                <p class="excerpt">
                    {{ featuredPost.excerpt }}
                </p>

                <div class="meta">

                    <span>
                        <i class="fa-regular fa-user"></i>
                        OOU Chronicle
                    </span>

                    <span>
                        <i class="fa-regular fa-calendar"></i>
                        {{ formatDate(featuredPost.published_at) }}
                    </span>

                    <span>
                        <i class="fa-regular fa-clock"></i>
                        4 min read
                    </span>

                </div>

                <RouterLink :to="`/news/${featuredPost.slug}`" class="read-btn">
                    Read Full Story
                </RouterLink>

            </div>

        </section>

    </section>

</template>
<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
    posts: {
        type: Array,
        default: () => []
    }
});

const featuredPost = computed(() => props.posts[0] || null);

const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
};
</script>
<style scoped>
.hero-wrapper {
    width: min(1200px, 92%);
    margin: 60px auto 80px;
}

.hero-intro {
    max-width: 760px;
    margin-bottom: 45px;
}

.section-tag {

    display: inline-flex;
    align-items: center;

    padding: 7px 16px;

    border-radius: 999px;

    background: #14532d;
    color: #fff;

    font-size: .78rem;
    font-weight: 700;

    letter-spacing: 2px;

    margin-bottom: 18px;

}

.hero-intro h2 {

    font-family: Georgia, serif;

    font-size: 3rem;

    line-height: 1.2;

    color: #111827;

    margin-bottom: 18px;

}

.hero-intro p {

    max-width: 700px;

    color: #6b7280;

    font-size: 1.05rem;

    line-height: 1.9;

}

.hero {

    display: grid;

    grid-template-columns: 2fr 1fr;

    gap: 35px;

    align-items: center;

}

.hero-image img {
    width: 100%;
    height: 520px;
    object-fit: cover;
    border-radius: 10px;
}

.hero-content {
    display: flex;
    flex-direction: column;
}

.category {
    width: fit-content;

    background: #14532d;
    color: white;

    padding: 6px 12px;

    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    border-radius: 4px;

    margin-bottom: 18px;
}

.hero-content h1 {
    font-size: 2.3rem;
    line-height: 1.25;
    color: #111827;
    margin-bottom: 18px;
    font-family: Georgia, "Times New Roman", serif;
}

.excerpt {
    color: #6b7280;
    line-height: 1.8;
    font-size: .98rem;
    margin-bottom: 25px;
}

.meta {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin-bottom: 30px;

    color: #6b7280;
    font-size: .9rem;
}

.meta span {
    display: flex;
    align-items: center;
    gap: 7px;
}

.read-btn {
    width: fit-content;

    padding: 14px 26px;

    background: #14532d;
    color: #fff;

    text-decoration: none;

    border-radius: 6px;

    transition: .3s;
}

.read-btn:hover {
    background: #0f3f22;
}

button {
    width: fit-content;

    padding: 14px 26px;

    background: #14532d;
    color: white;

    border: none;
    border-radius: 6px;

    cursor: pointer;
    transition: .3s;
}

button:hover {
    background: #0f3f22;
}

@media (max-width: 900px) {

    .hero {
        grid-template-columns: 1fr;
    }

    .hero-image img {
        height: 380px;
    }

    .hero-content h1 {
        font-size: 1.8rem;
    }

}

@media (max-width: 600px) {

    .hero {
        width: 94%;
        margin: 30px auto;
    }

    .hero-image img {
        height: 260px;
    }

    .hero-content h1 {
        font-size: 1.45rem;
    }

    .meta {
        gap: 12px;
        font-size: .8rem;
    }

}
</style>