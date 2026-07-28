<template>
    <nav class="pagination" v-if="totalPages > 1">

        <button class="nav-btn" :disabled="currentPage === 1" @click="$emit('change-page', currentPage - 1)">
            <i class="fa-solid fa-chevron-left"></i>
        </button>

        <button v-for="page in totalPages" :key="page" class="page-btn" :class="{ active: page === currentPage }"
            @click="$emit('change-page', page)">
            {{ page }}
        </button>

        <button class="nav-btn" :disabled="currentPage === totalPages" @click="$emit('change-page', currentPage + 1)">
            <i class="fa-solid fa-chevron-right"></i>
        </button>

    </nav>
</template>

<script setup>
defineProps({
    currentPage: {
        type: Number,
        required: true
    },

    totalPages: {
        type: Number,
        required: true
    }
});

defineEmits([
    "change-page"
]);
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    margin-top: 45px;
    flex-wrap: wrap;
}

.page-btn,
.nav-btn {

    width: 44px;
    height: 44px;

    border: none;
    border-radius: 10px;

    background: #fff;

    color: #374151;

    font-size: .95rem;
    font-weight: 600;

    cursor: pointer;

    transition: .25s ease;

    box-shadow: 0 2px 8px rgba(0, 0, 0, .05);
}

.page-btn:hover,
.nav-btn:hover {

    background: #14532d;
    color: #fff;

    transform: translateY(-2px);
}

.page-btn.active {

    background: #14532d;
    color: #fff;

    pointer-events: none;
}

.nav-btn:disabled {

    opacity: .45;
    cursor: not-allowed;
    transform: none;
}

.nav-btn:disabled:hover {

    background: #fff;
    color: #374151;
}

@media(max-width:768px) {

    .page-btn,
    .nav-btn {

        width: 40px;
        height: 40px;

        font-size: .9rem;
    }

    .pagination {

        gap: 8px;
        margin-top: 35px;
    }

}
</style>