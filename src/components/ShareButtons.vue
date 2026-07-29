<template>
    <section class="share-section">

        <h3>Share this article</h3>

        <div class="share-buttons">

            <button class="share-btn" @click="shareArticle">
                <i class="fa-solid fa-share-nodes"></i>

                <span>Share</span>
            </button>

            <button class="copy-btn" @click="copyLink">
                <i class="fa-solid fa-link"></i>

                <span>{{ copied ? "Copied!" : "Copy Link" }}</span>
            </button>

        </div>

    </section>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    post: {
        type: Object,
        required: true
    }
});

const copied = ref(false);

const currentUrl = window.location.href;

const shareArticle = async () => {

    const shareData = {

        title:
            props.post?.title ||
            "OOU Chronicle",

        text:
            props.post?.excerpt ||
            "Read this article on OOU Chronicle.",

        url: currentUrl

    };

    try {

        if (navigator.share) {

            await navigator.share(shareData);

        } else {

            await navigator.clipboard.writeText(currentUrl);

            copied.value = true;

            setTimeout(() => {

                copied.value = false;

            }, 2000);

        }

    } catch (err) {

        console.log(err);

    }

};

const copyLink = async () => {

    try {

        await navigator.clipboard.writeText(currentUrl);

        copied.value = true;

        setTimeout(() => {

            copied.value = false;

        }, 2000);

    } catch (err) {

        console.log(err);

    }

};
</script>

<style scoped>
.share-section {

    margin: 40px 0;

    padding: 30px 0;

    border-top: 1px solid #e5e7eb;

    border-bottom: 1px solid #e5e7eb;

}

.share-section h3 {

    font-size: 1.35rem;

    color: #111827;

    margin-bottom: 22px;

    font-weight: 700;

}

.share-buttons {

    display: flex;

    gap: 16px;

    flex-wrap: wrap;

}

.share-btn,

.copy-btn {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 10px;

    border: none;

    cursor: pointer;

    border-radius: 999px;

    padding: 14px 28px;

    font-size: .96rem;

    font-weight: 600;

    transition: .3s;

}

.share-btn {

    background: #14532d;

    color: #fff;

}

.copy-btn {

    background: #f3f4f6;

    color: #111827;

}

.share-btn:hover,

.copy-btn:hover {

    transform: translateY(-3px);

}

.share-btn i,

.copy-btn i {

    font-size: 1rem;

}

@media(max-width:600px) {

    .share-buttons {

        flex-direction: column;

    }

    .share-btn,

    .copy-btn {

        width: 100%;

    }

}
</style>