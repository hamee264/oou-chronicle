<template>
    <section class="category-tabs">

        <button class="tab" :class="{ active: !activeCategory }" @click="emit('change-category', null)">
            <i class="fa-solid fa-border-all"></i>
            <span>All</span>
        </button>

        <button v-for="category in categories" :key="category.id" class="tab"
            :class="{ active: activeCategory?.id === category.id }" @click="emit('change-category', category)">
            <i class="fa-regular fa-folder-open"></i>
            <span>{{ category.name }}</span>
        </button>

    </section>
</template>

<script setup>
defineProps({
    categories: {
        type: Array,
        default: () => []
    },
    activeCategory: {
        type: Object,
        default: null
    }
});

const emit = defineEmits(["change-category"]);
</script>

<style scoped>
.category-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    flex-wrap: wrap;

    margin: 32px 0 45px;
    padding-bottom: 14px;

    border-bottom: 1px solid #e5e7eb;
}

.category-tabs::-webkit-scrollbar {
    display: none;
}

.tab {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;

    padding: 10px 18px;

    border: 1px solid #d1d5db;
    background: #fff;
    color: #374151;

    font-size: .9rem;
    font-weight: 600;

    border-radius: 999px;
    cursor: pointer;

    transition:
        background .2s ease,
        color .2s ease,
        border-color .2s ease;
}

.tab i {
    font-size: .82rem;
}

.tab:hover {
    color: #14532d;
    border-color: #14532d;
}

.tab.active {
    background: #14532d;
    border-color: #14532d;
    color: #fff;
}

@media (max-width: 768px) {

    .category-tabs {
        justify-content: flex-start;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        margin: 24px 0 36px;
        padding-bottom: 12px;

        scrollbar-width: none;
    }

    .category-tabs::-webkit-scrollbar {
        display: none;
    }

}
</style>