<template>
    <section class="news-header">

        <div class="breadcrumb">
            <RouterLink to="/">Home</RouterLink>

            <span>/</span>

            <span>News</span>
        </div>

        <h1>Latest News</h1>

        <p>
            Stay informed with the latest campus news, university announcements,
            student activities, sports, technology and events from
            Olabisi Onabanjo University.
        </p>

    </section>
</template>

<script setup>

</script>

<style scoped>
.news-header {
    padding: 50px 0;
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 40px;
}

.breadcrumb {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
    font-size: .95rem;
}

.breadcrumb a {
    text-decoration: none;
    color: #14532d;
    font-weight: 600;
}

.breadcrumb span {
    color: #6b7280;
}

.news-header h1 {
    font-size: 3rem;
    font-family: Georgia, serif;
    color: #111827;
    margin-bottom: 18px;
    line-height: 1.2;
}

.news-header p {
    max-width: 700px;
    color: #6b7280;
    line-height: 1.8;
    font-size: 1rem;
}

@media(max-width:768px) {

    .news-header {
        padding: 35px 0;
    }

    .news-header h1 {
        font-size: 2.2rem;
    }

    .news-header p {
        font-size: .95rem;
    }

}
</style>