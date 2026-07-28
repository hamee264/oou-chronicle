<template>

    <main class="not-found">

        <span class="status">
            ERROR 404
        </span>

        <h1>
            This Story Couldn't Be Found.
        </h1>

        <p>
            The page you're looking for may have been moved,
            renamed or is no longer available.
        </p>

        <div class="actions">

            <RouterLink to="/" class="primary-btn">
                Return Home
            </RouterLink>

            <RouterLink to="/news" class="secondary-btn">
                Browse Latest News
            </RouterLink>

        </div>

    </main>

</template>

<script setup>

</script>

<style scoped>
.not-found {

    width: min(700px, 92%);

    margin: 120px auto;

    text-align: center;
}

.status {

    display: inline-block;

    color: #14532d;

    letter-spacing: 2px;

    font-size: .8rem;

    font-weight: 700;

    margin-bottom: 20px;
}

h1 {

    font-family: Georgia, serif;

    font-size: 3.5rem;

    color: #111827;

    margin-bottom: 25px;

    line-height: 1.2;
}

p {

    color: #6b7280;

    font-size: 1.05rem;

    line-height: 1.9;

    max-width: 600px;

    margin: auto auto 45px;
}

.actions {

    display: flex;

    justify-content: center;

    gap: 18px;

    flex-wrap: wrap;
}

.primary-btn {

    padding: 15px 28px;

    background: #14532d;

    color: #fff;

    text-decoration: none;

    border-radius: 8px;

    font-weight: 600;

    transition: .3s;
}

.primary-btn:hover {

    background: #0f4424;
}

.secondary-btn {

    padding: 15px 28px;

    border: 1px solid #d1d5db;

    border-radius: 8px;

    color: #111827;

    text-decoration: none;

    font-weight: 600;

    transition: .3s;
}

.secondary-btn:hover {

    border-color: #14532d;

    color: #14532d;
}

@media(max-width:768px) {

    h1 {

        font-size: 2.3rem;

    }

}
</style>