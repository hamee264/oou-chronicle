<template>
    <section class="share-section">

        <h3>Share this article</h3>

        <div class="share-buttons">

            <button @click="shareWhatsApp" class="whatsapp">
                <i class="fa-brands fa-whatsapp"></i>
                WhatsApp
            </button>

            <button @click="shareFacebook" class="facebook">
                <i class="fa-brands fa-facebook-f"></i>
                Facebook
            </button>

            <button @click="shareTwitter" class="twitter">
                <i class="fa-brands fa-x-twitter"></i>
                X
            </button>

            <button @click="copyLink" class="copy">
                <i class="fa-solid fa-link"></i>
                Copy Link
            </button>

        </div>

    </section>
</template>

<script setup>
const currentUrl = window.location.href;

const shareWhatsApp = () => {
    window.open(
        `https://wa.me/?text=${encodeURIComponent(currentUrl)}`,
        "_blank"
    );
};

const shareFacebook = () => {
    window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
        "_blank"
    );
};

const shareTwitter = () => {
    window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`,
        "_blank"
    );
};

const copyLink = async () => {
    await navigator.clipboard.writeText(currentUrl);
    alert("Link copied!");
};
</script>

<style scoped>
.share-section {
    padding: 30px 0;
    border-top: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
}

.share-section h3 {
    margin-bottom: 20px;
    font-size: 1.3rem;
    color: #111827;
}

.share-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.share-buttons button {
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 12px 22px;

    border: none;
    border-radius: 999px;

    cursor: pointer;

    font-weight: 600;

    transition: .3s;
}

.whatsapp {
    background: #25D366;
    color: #fff;
}

.facebook {
    background: #1877F2;
    color: #fff;
}

.twitter {
    background: #111827;
    color: #fff;
}

.copy {
    background: #f3f4f6;
    color: #111827;
}

.share-buttons button:hover {
    transform: translateY(-2px);
    opacity: .9;
}

@media(max-width:600px) {

    .share-buttons {
        flex-direction: column;
    }

    .share-buttons button {
        justify-content: center;
        width: 100%;
    }

}
</style>