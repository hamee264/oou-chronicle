<script setup>
import { onMounted } from "vue";
import { usePosts } from "@/composables/usePosts";

import HeroSection from "../components/HeroSection.vue";
import LatestNews from "../components/LatestStories.vue";
import TrendingNews from "../components/TrendingNews.vue";
import CategoriesSection from "../components/CategoriesSection.vue";
import Newsletter from "../components/Newsletter.vue";

const {
  posts,
  categories,
  getPosts,
  getCategories
} = usePosts();

onMounted(async () => {
  await getPosts();
  await getCategories();
});
</script>

<template>
  <HeroSection :posts="posts" />

  <LatestNews :posts="posts" />

  <TrendingNews :posts="posts" />

  <CategoriesSection :categories="categories" />

  <Newsletter />

</template>