<template>
    <section class="article-tags">

        <h3>Tags</h3>

        <div class="tags">

            <RouterLink v-for="tag in tags" :key="tag" :to="`/tags/${tag.toLowerCase()}`" class="tag">
                #{{ tag }}
            </RouterLink>

        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue'

const tags = ref([
    'OOU',
    'Education',
    'Campus',
    'Students',
    'Academic Calendar',
    'Admission'
])
</script>

<style scoped>
.article-tags {
    padding: 35px 0;
    border-top: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
}

.article-tags h3 {
    font-size: 1.25rem;
    color: #111827;
    margin-bottom: 20px;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.tag {
    text-decoration: none;
    color: #374151;

    background: #f3f4f6;

    padding: 10px 18px;

    border-radius: 30px;

    font-size: .9rem;
    font-weight: 500;

    transition: .25s;
}

.tag:hover {
    background: #14532d;
    color: #fff;
    transform: translateY(-2px);
}

@media(max-width:768px) {

    .tags {
        gap: 10px;
    }

    .tag {
        font-size: .85rem;
        padding: 8px 14px;
    }

}
</style>