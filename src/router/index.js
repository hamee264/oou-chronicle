import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import NewsView from "../views/NewsView.vue";
import SingleNews from "../views/SingleNews.vue";
import AboutView from "../views/AboutView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import SingleCategory from "../views/SingleCategory.vue";
import ContactView from "../views/ContactView.vue";
import SearchView from "../views/SearchView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
    },
    {
      path: "/news/:slug",
      name: "single-news",
      component: SingleNews,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/categories",
      name: "categories",
      component: CategoriesView,
    },
    {
      path: "/categories/:slug",
      name: "single-category",
      component: SingleCategory,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;
