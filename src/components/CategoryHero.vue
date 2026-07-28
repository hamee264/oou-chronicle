<template>
    <section class="hero">

        <p class="eyebrow">
            Categories
        </p>

        <h1>
            Browse Categories
        </h1>

        <p class="description">
            Explore news from every section of OOU Chronicle. Find stories on academics,
            campus life, student politics, sports, events, technology and more.
        </p>

    </section>
</template>

<style scoped>
.hero {
    padding: 30px 0 45px;
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 45px;
}

.eyebrow {
    color: #14532d;
    font-size: .9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
}

h1 {
    font-size: 2.8rem;
    font-family: Georgia, serif;
    color: #111827;
    margin-bottom: 16px;
    line-height: 1.2;
}

.description {
    max-width: 700px;
    color: #6b7280;
    line-height: 1.8;
    font-size: 1.05rem;
}

@media (max-width:768px) {
    .hero {
        padding: 20px 0 35px;
    }

    h1 {
        font-size: 2rem;
    }

    .description {
        font-size: 1rem;
    }
}
</style>