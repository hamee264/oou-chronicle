<template>
    <main class="search-page">

        <section class="hero">

            <h1>Search Articles</h1>

            <p>
                Find news, announcements, events and stories across OOU Chronicle.
            </p>

            <div class="search-box">

                <i class="fa-solid fa-magnifying-glass"></i>

                <input type="text" placeholder="Search articles...">

                <button>
                    Search
                </button>

            </div>

        </section>

        <SearchResults />

    </main>
</template>

<script setup>
import SearchResults from '@/components/SearchResults.vue'
</script>

<style scoped>
.search-page {
    width: min(1250px, 92%);
    margin: 40px auto 80px;
}

.hero {
    text-align: center;
    margin-bottom: 60px;
}

.hero h1 {
    font-size: 3rem;
    font-family: Georgia, serif;
    color: #111827;
}

.hero p {
    margin: 18px auto 35px;
    max-width: 650px;
    color: #6b7280;
    line-height: 1.8;
}

.search-box {
    max-width: 750px;
    margin: auto;

    display: flex;
    align-items: center;

    border: 1px solid #d1d5db;
    border-radius: 60px;

    overflow: hidden;

    background: #fff;
}

.search-box i {
    padding-left: 22px;
    color: #6b7280;
}

.search-box input {
    flex: 1;

    border: none;
    outline: none;

    padding: 18px;
    font-size: 1rem;
}

.search-box button {
    border: none;
    background: #14532d;
    color: white;

    padding: 18px 35px;

    cursor: pointer;
}

@media(max-width:768px) {

    .hero h1 {
        font-size: 2rem;
    }

    .search-box {
        flex-wrap: wrap;
        border-radius: 18px;
    }

    .search-box input {
        width: 100%;
    }

    .search-box button {
        width: 100%;
    }

}
</style>