<template>
    <section class="empty-state">

        <div class="icon">
            <i class="fa-regular fa-newspaper"></i>
        </div>

        <h2>{{ title }}</h2>

        <p>{{ message }}</p>

        <RouterLink v-if="buttonText" :to="buttonLink" class="btn">
            {{ buttonText }}
        </RouterLink>

    </section>
</template>

<script setup>

defineProps({

    title: String,

    message: String,

    buttonText: String,

    buttonLink: String

})

</script>

<style scoped>
.empty-state {

    max-width: 600px;

    margin: 100px auto;

    text-align: center;

    padding: 40px 20px;
}

.icon {

    width: 80px;

    height: 80px;

    margin: auto;

    border-radius: 50%;

    background: #f3f4f6;

    display: flex;

    justify-content: center;

    align-items: center;

    margin-bottom: 25px;
}

.icon i {

    font-size: 2rem;

    color: #14532d;
}

h2 {

    font-family: Georgia, serif;

    color: #111827;

    margin-bottom: 15px;
}

p {

    color: #6b7280;

    line-height: 1.8;

    margin-bottom: 30px;
}

.btn {

    display: inline-block;

    padding: 14px 26px;

    background: #14532d;

    color: #fff;

    text-decoration: none;

    border-radius: 8px;

    transition: .3s;
}

.btn:hover {

    background: #0f4424;
}
</style>