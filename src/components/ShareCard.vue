<script setup>
import { shareArticle } from "@/composables/useShare";

const props = defineProps({
    post: Object
});
</script>
<template>
    <div id="share-card" class="share-card">

        <div class="image">
            <img :src="post.featured_image" :alt="post.title" />

            <div class="overlay"></div>

            <div class="brand">
                <img src="/logo.png" alt="OOU Chronicle">
                <span>OOU CHRONICLE</span>
            </div>

            <span class="category">
                {{ post.categories?.name }}
            </span>
        </div>

        <div class="body">

            <h2>{{ post.title }}</h2>

            <p>{{ post.excerpt }}</p>

            <div class="footer">

                <span>
                    🌐 www.oouchronicle.com
                </span>

                <span>
                    Read the full story →
                </span>
                <button @click="shareArticle(post)">
                    <i class="fa-solid fa-share-nodes"></i>
                    Share
                </button>
            </div>

        </div>

    </div>
</template>
<style scoped>
.share-card {
    width: 1200px;
    height: 630px;

    background: #fff;

    overflow: hidden;

    border-radius: 20px;

    display: flex;
    flex-direction: column;
}

.image {
    position: relative;
    height: 360px;
}

.image img {

    width: 100%;
    height: 100%;
    object-fit: cover;

}

.overlay {

    position: absolute;
    inset: 0;

    background: linear-gradient(transparent,
            rgba(0, 0, 0, .35));

}

.brand {

    position: absolute;

    top: 25px;
    right: 25px;

    background: #14532d;

    color: #fff;

    padding: 16px 24px;

    border-radius: 12px;

    display: flex;
    align-items: center;
    gap: 12px;

}

.brand img {

    width: 34px;
    height: 34px;

}

.category {

    position: absolute;

    left: 25px;
    bottom: 25px;

    background: white;

    color: #14532d;

    padding: 8px 18px;

    border-radius: 999px;

    font-weight: 700;

}

.body {

    flex: 1;

    padding: 40px 55px;

}

.body h2 {

    font-size: 52px;

    line-height: 1.2;

    color: #111827;

    margin-bottom: 20px;

    font-family: Georgia, serif;

}

.body p {

    font-size: 26px;

    color: #6b7280;

    line-height: 1.7;

}

.footer {

    margin-top: auto;

    display: flex;

    justify-content: space-between;

    align-items: center;

    border-top: 2px solid #e5e7eb;

    padding-top: 25px;

    font-weight: 700;

    color: #14532d;

}
</style>