<template>
    <section class="news-filters">

        <div class="search-box">

            <i class="fa-solid fa-magnifying-glass"></i>

            <input v-model="search" type="text" placeholder="Search articles..." @input="emitAll">

        </div>

        <select v-model="category" @change="emitAll">

            <option value="">
                All Categories
            </option>

            <option v-for="item in categories" :key="item.id" :value="item.id">
                {{ item.name }}
            </option>

        </select>

        <select v-model="sort" @change="emitAll">

            <option value="newest">
                Newest First
            </option>

            <option value="oldest">
                Oldest First
            </option>

        </select>

    </section>
</template>

<script setup>
import { ref } from "vue";

defineProps({
    categories: {
        type: Array,
        default: () => []
    }
});

const emit = defineEmits(["search", "filter"]);

const search = ref("");
const category = ref("");
const sort = ref("newest");

const emitAll = () => {

    emit("search", search.value);

    emit("filter", {
        category: category.value,
        sort: sort.value
    });

};
</script>

<style scoped>
.news-filters {
    display: flex;
    gap: 18px;
    align-items: center;
    flex-wrap: wrap;
    margin: 35px 0 40px;
}

.search-box {
    flex: 1;
    min-width: 280px;

    display: flex;
    align-items: center;

    height: 52px;

    padding: 0 18px;

    border: 1px solid #e5e7eb;
    border-radius: 8px;

    background: #fff;

    transition: .25s ease;
}

.search-box:focus-within {
    border-color: #14532d;
}

.search-box i {
    color: #6b7280;
    font-size: .95rem;
}

.search-box input {
    flex: 1;

    border: none;
    outline: none;
    background: transparent;

    padding-left: 12px;

    font-size: .95rem;
    color: #111827;
}

.search-box input::placeholder {
    color: #9ca3af;
}

select {
    height: 52px;

    min-width: 190px;

    padding: 0 18px;

    border: 1px solid #e5e7eb;
    border-radius: 8px;

    background: #fff;

    font-size: .92rem;
    color: #111827;

    cursor: pointer;

    transition: .25s ease;
}

select:hover,
select:focus {
    border-color: #14532d;
    outline: none;
}

@media (max-width: 768px) {

    .news-filters {
        flex-direction: column;
        align-items: stretch;
    }

    .search-box,
    select {
        width: 100%;
        min-width: unset;
    }

    .search-box {
        padding: 12px 12px;
    }
}
</style>