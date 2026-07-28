<template>
    <Transition name="progress">

        <div v-show="visible" class="reading-progress">

            <div class="progress-bar" :style="{ width: progress + '%' }"></div>

        </div>

    </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const progress = ref(0);
const visible = ref(false);

const updateProgress = () => {

    const scrollTop = window.scrollY;

    visible.value = scrollTop > 100;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    if (documentHeight <= 0) {
        progress.value = 0;
        return;
    }

    progress.value = Math.min(
        100,
        (scrollTop / documentHeight) * 100
    );

};

onMounted(() => {

    updateProgress();

    window.addEventListener("scroll", updateProgress);

});

onUnmounted(() => {

    window.removeEventListener("scroll", updateProgress);

});
</script>

<style scoped>
.reading-progress {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;
    height: 4px;

    background: rgba(255, 255, 255, .92);

    backdrop-filter: blur(8px);

    z-index: 9999;

    box-shadow: 0 1px 3px rgba(0, 0, 0, .05);

}

.progress-bar {

    height: 100%;

    background: #14532d;

    transition: width .08s linear;

}

.progress-enter-active,
.progress-leave-active {

    transition: opacity .25s ease,
        transform .25s ease;

}

.progress-enter-from,
.progress-leave-to {

    opacity: 0;

    transform: translateY(-4px);

}
</style>