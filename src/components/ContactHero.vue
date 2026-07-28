<template>

    <section class="hero">

        <div class="hero-content">

            <span class="section-tag">
                CONTACT
            </span>

            <h1>
                We'd Love To Hear From You
            </h1>

            <p>
                Whether you have a news tip, feedback, an event you'd like us
                to cover, or you're interested in joining our team, our inbox
                is always open.
            </p>

            <div class="breadcrumb">

                <RouterLink to="/">
                    Home
                </RouterLink>

                <span>/</span>

                <span>Contact</span>

            </div>

        </div>

    </section>

</template>

<script setup>

</script>

<style scoped>
.hero {

    padding: 70px 0 80px;

    border-bottom: 1px solid #e5e7eb;

    margin-bottom: 80px;
}

.hero-content {

    max-width: 700px;
}

.section-tag {

    display: inline-block;

    margin-bottom: 18px;

    color: #14532d;

    font-size: .8rem;

    font-weight: 700;

    letter-spacing: 2px;

    text-transform: uppercase;
}

.hero h1 {

    font-size: 3.6rem;

    line-height: 1.15;

    font-family: Georgia, serif;

    color: #111827;

    margin-bottom: 22px;
}

.hero p {

    font-size: 1.05rem;

    line-height: 1.9;

    color: #6b7280;

    margin-bottom: 35px;
}

.breadcrumb {

    display: flex;

    align-items: center;

    gap: 10px;

    font-size: .95rem;
}

.breadcrumb a {

    text-decoration: none;

    color: #14532d;

    font-weight: 600;
}

.breadcrumb span {

    color: #9ca3af;
}

@media(max-width:768px) {

    .hero {

        padding: 50px 0 60px;

        margin-bottom: 60px;

    }

    .hero h1 {

        font-size: 2.4rem;

    }

    .hero p {

        font-size: 1rem;

    }

}
</style>