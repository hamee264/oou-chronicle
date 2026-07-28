<template>
    <section class="hero">

        <div class="hero-content">

            <span class="label">
                ABOUT OOU CHRONICLE
            </span>

            <h1>
                Every Campus Has Stories.
                <br>
                We Make Sure They're Told.
            </h1>

            <p>
                OOU Chronicle is a student-driven news platform covering life at
                Olabisi Onabanjo University. From breaking campus news to
                academic updates, student achievements and thoughtful opinions,
                we document the moments that matter to our community.
            </p>

        </div>

        <div class="hero-image">

            <img src="/src/assets/images.jpeg" alt="OOU Campus">

        </div>

    </section>
</template>

<script setup>

</script>

<style scoped>
.hero {
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    align-items: center;
    gap: 60px;

    padding: 70px 0;
}

.hero-content {
    max-width: 600px;
}

.label {
    display: inline-block;

    margin-bottom: 20px;

    font-size: .78rem;
    font-weight: 700;
    letter-spacing: 2px;

    color: #14532d;

    text-transform: uppercase;
}

.hero h1 {
    font-size: 3.7rem;
    line-height: 1.15;

    color: #111827;

    font-family: Georgia, serif;

    margin-bottom: 28px;
}

.hero p {
    font-size: 1.05rem;
    line-height: 1.9;

    color: #4b5563;
}

.hero-image {
    overflow: hidden;
    border-radius: 18px;
}

.hero-image img {
    width: 100%;
    height: 520px;
    object-fit: cover;
    display: block;

    transition: .4s;
}

.hero-image:hover img {
    transform: scale(1.03);
}

@media(max-width:992px) {

    .hero {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .hero-image {
        order: -1;
    }

    .hero h1 {
        font-size: 2.8rem;
    }

    .hero-image img {
        height: 420px;
    }

}

@media(max-width:600px) {

    .hero {
        padding: 40px 0;
    }

    .hero h1 {
        font-size: 2rem;
    }

    .hero p {
        font-size: .95rem;
    }

    .hero-image img {
        height: 280px;
    }

}
</style>