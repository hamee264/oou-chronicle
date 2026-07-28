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
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import TermsView from "../views/TermsView.vue";
import DisclaimerView from "../views/DisclaimerView.vue";
import EditorialPolicyView from "../views/EditorialPolicyView.vue";

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "OOU Chronicle | Campus News & Updates",
        description:
          "Stay informed with the latest campus news, student stories, events, and announcements from Olabisi Onabanjo University.",
      },
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
      meta: {
        title: "Latest News | OOU Chronicle",
        description:
          "Read the latest news, campus events, opinions and student updates from OOU Chronicle.",
      },
    },
    {
      path: "/news/:slug",
      name: "single-news",
      component: SingleNews,
      meta: {
        title: "News Article | OOU Chronicle",
        description: "Read the full story on OOU Chronicle.",
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: {
        title: "About Us | OOU Chronicle",
        description:
          "Learn about OOU Chronicle, our editorial principles, and our mission to serve the university community.",
      },
    },
    {
      path: "/categories",
      name: "categories",
      component: CategoriesView,
      meta: {
        title: "Browse Categories | OOU Chronicle",
        description:
          "Explore news by category including academics, sports, student life, politics and more.",
      },
    },
    {
      path: "/categories/:slug",
      name: "single-category",
      component: SingleCategory,
      meta: {
        title: "Category | OOU Chronicle",
        description: "Browse articles in this category.",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
      meta: {
        title: "Contact Us | OOU Chronicle",
        description:
          "Get in touch with the editorial team of OOU Chronicle for news tips, enquiries and collaborations.",
      },
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
      meta: {
        title: "Search | OOU Chronicle",
        description: "Search for articles and stories across OOU Chronicle.",
      },
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: PrivacyPolicy,
      meta: {
        title: "Privacy Policy | OOU Chronicle",
        description:
          "Read the Privacy Policy of OOU Chronicle and learn how we collect, use and protect your information.",
      },
    },
    {
      path: "/terms",
      name: "terms",
      component: TermsView,
      meta: {
        title: "Terms & Conditions | OOU Chronicle",
        description:
          "Read the Terms & Conditions governing the use of OOU Chronicle.",
      },
    },
    {
      path: "/disclaimer",
      name: "disclaimer",
      component: DisclaimerView,
      meta: {
        title: "Disclaimer | OOU Chronicle",
        description:
          "Learn about the limitations and responsibilities relating to the content published on OOU Chronicle.",
      },
    },
    {
      path: "/editorial-policy",
      name: "editorial-policy",
      component: EditorialPolicyView,
      meta: {
        title: "Editorial Policy | OOU Chronicle",
        description:
          "Understand the editorial principles, standards and ethics that guide OOU Chronicle.",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
      meta: {
        title: "404 | Page Not Found",
        description: "The page you are looking for could not be found.",
      },
    },
  ],
});

router.afterEach((to) => {
  document.title = to.meta.title || "OOU Chronicle";

  let description = document.querySelector('meta[name="description"]');

  if (!description) {
    description = document.createElement("meta");
    description.setAttribute("name", "description");
    document.head.appendChild(description);
  }

  description.setAttribute("content", to.meta.description || "OOU Chronicle");
});

export default router;
