<template>
    <div class="Container" :class="{ 'is-scrolled': isScrolled }">
        <TopBar />

        <div class="dateline">
            <span class="dateline-item">Olabisi Onabanjo University</span>
            <span class="dateline-divider" aria-hidden="true">•</span>
            <span class="dateline-item">{{ editionDate }}</span>
            <span class="dateline-divider" aria-hidden="true">•</span>
            <span class="dateline-item dateline-edition">Campus edition</span>
        </div>

        <div class="navbar desktop-navbar">
            <RouterLink to="/" class="logo" aria-label="OOU Chronicle home">
                <span class="seal">
                    <img src="/src/assets/images.jpeg" alt="" />
                </span>
                <span class="logo-text">
                    <h2>OOU Chronicle</h2>
                    <p>News from the Blue Ridge campus</p>
                </span>
            </RouterLink>

            <nav class="links" aria-label="Primary">
                <RouterLink class="link" @click="menuOpen = false" to="/">Home</RouterLink>
                <RouterLink class="link" @click="menuOpen = false" to="/news">News</RouterLink>
                <RouterLink class="link" @click="menuOpen = false" to="/about">About</RouterLink>
                <RouterLink class="link" @click="menuOpen = false" to="/categories">Categories</RouterLink>
                <RouterLink class="link" @click="menuOpen = false" to="/contact">Contact</RouterLink>
            </nav>

            <div class="search">
                <router-link to="/Search" class="icon-btn" aria-label="Search stories">
                    <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                </router-link>
                <button type="button" class="icon-btn" aria-label="Toggle dark mode">
                    <i class="fa-solid fa-moon" aria-hidden="true"></i>
                </button>
            </div>
        </div>

        <div class="rule"></div>

        <div class="mobile-navbar">
            <RouterLink to="/" class="mobile-brand" aria-label="OOU Chronicle home">
                <img src="/src/assets/hero.png" alt="" />
            </RouterLink>

            <div class="icons">
                <router-link to="/Search" class="icon-btn" aria-label="Search stories">
                    <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                </router-link>
                <button type="button" class="icon-btn" aria-label="Toggle dark mode">
                    <i class="fa-solid fa-moon" aria-hidden="true"></i>
                </button>
                <button type="button" class="icon-btn menu-toggle" :aria-expanded="menuOpen" aria-label="Toggle menu"
                    aria-controls="mobile-nav" @click="toggleMenu">
                    <i :class="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" aria-hidden="true"></i>
                </button>
            </div>

            <nav id="mobile-nav" class="Mobile-links" :class="{ open: menuOpen }" aria-label="Mobile">
                <RouterLink class="link" to="/" @click="menuOpen = false">Home</RouterLink>
                <RouterLink class="link" to="/news" @click="menuOpen = false">News</RouterLink>
                <RouterLink class="link" to="/about" @click="menuOpen = false">About</RouterLink>
                <RouterLink class="link" to="/categories" @click="menuOpen = false">Categories</RouterLink>
                <RouterLink class="link" to="/contact" @click="menuOpen = false">Contact</RouterLink>
            </nav>
        </div>

        <div v-if="menuOpen" class="overlay" @click="toggleMenu"></div>
    </div>
</template>


<script setup>
import TopBar from "./TopBar.vue";
import { ref, computed, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);
function toggleMenu() {
    menuOpen.value = !menuOpen.value;
}

const editionDate = computed(() =>
    new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    })
);

const isScrolled = ref(false);
function handleScroll() {
    isScrolled.value = window.scrollY > 4;
}
function handleKeydown(e) {
    if (e.key === "Escape" && menuOpen.value) {
        menuOpen.value = false;
    }
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeydown);
});
onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Public+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap");

.Container {
    --color-green: #14532d;
    --color-green-dark: #0f3d21;
    --color-green-tint: #f0f7f2;
    --color-ink: #1f2937;
    --color-muted: #6b7280;
    --color-border: #e5e7eb;
    --color-border-soft: #f3f4f6;
    --font-serif: "Fraunces", serif;
    --font-sans: "Public Sans", sans-serif;
    --font-mono: "IBM Plex Mono", monospace;
    --ease-premium: cubic-bezier(0.4, 0, 0.2, 1);

    position: sticky;
    top: 0;
    z-index: 50;
    padding: 0;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    font-family: var(--font-sans);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    transition: box-shadow 0.3s var(--ease-premium);
}

.Container.is-scrolled {
    box-shadow: 0 2px 10px rgba(15, 23, 15, 0.06);
}

/* dateline */
.dateline {
    background: var(--color-green);
    color: #ffffff;
    padding: 6px 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-mono);
    font-size: 10.5px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.dateline-item {
    opacity: 0.92;
}

.dateline-edition {
    opacity: 1;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.14);
    padding: 2px 8px;
    border-radius: 2px;
    letter-spacing: 0.08em;
}

.dateline-divider {
    color: #5c8a6f;
}

/* desktop navbar */
.navbar {
    padding: 16px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
}

.mobile-navbar {
    display: none;
}

.logo {
    display: flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
    border-radius: 4px;
}

.seal {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1.5px solid var(--color-green);
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.3s var(--ease-premium), border-color 0.3s var(--ease-premium);
}

.logo:hover .seal,
.logo:focus-visible .seal {
    transform: scale(1.05);
    border-color: var(--color-green-dark);
}

.seal img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.logo-text {
    display: block;
}

.logo-text p {
    font-size: 11px;
    color: var(--color-muted);
    margin-top: 2px;
    font-style: italic;
}

.logo-text h2 {
    font-family: var(--font-serif);
    font-weight: 600;
    font-size: 1.7rem;
    color: var(--color-green);
    letter-spacing: -0.01em;
    line-height: 1;
    margin: 0;
}

.links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
}

.links .link {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-ink);
    text-decoration: none;
    position: relative;
    padding-bottom: 4px;
    white-space: nowrap;
    transition: color 0.25s var(--ease-premium);
}

.links .link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: var(--color-green);
    transition: width 0.3s var(--ease-premium);
}

.link:hover::after,
.link.router-link-exact-active::after {
    width: 100%;
}

.link:hover,
.link.router-link-exact-active {
    color: var(--color-green);
}

.search {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

.icon-btn {
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-ink);
    background: none;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.25s var(--ease-premium), background 0.25s var(--ease-premium);
}

.icon-btn i {
    font-size: 1rem;
    transition: transform 0.2s var(--ease-premium);
}

.icon-btn:hover {
    color: var(--color-green);
    background: var(--color-green-tint);
}

.icon-btn:active i {
    transform: scale(0.9);
}

/* signature double rule */
.rule {
    height: 4px;
    background: var(--color-green);
    border-bottom: 1px solid var(--color-green-dark);
}

.overlay {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 15, 0.45);
    z-index: 90;
}

@media (max-width: 950px) {
    .navbar {
        padding: 14px 20px;
    }

    .dateline {
        padding: 5px 20px;
        font-size: 9.5px;
        gap: 8px;
    }

    .seal {
        width: 42px;
        height: 42px;
    }

    .logo-text p {
        font-size: 9px;
    }

    .logo-text h2 {
        font-size: 1.25rem;
    }

    .links {
        gap: 1.4rem;
    }

    .links .link {
        font-size: 11px;
    }
}

@media (max-width: 800px) {
    .desktop-navbar {
        display: none;
    }

    .dateline {
        display: none;
    }

    .mobile-navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 66px;
        padding: 0 16px;
        position: relative;
        z-index: 100;
    }

    .mobile-brand {
        display: inline-flex;
        border-radius: 4px;
    }

    .mobile-brand img {
        width: 90px;
        height: 56px;
        object-fit: cover;
        border-radius: 4px;
        border: 1.5px solid var(--color-green);
        padding: 2px;
    }

    .rule {
        order: -1;
    }

    .icons {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .Mobile-links {
        position: absolute;
        top: calc(100% + 8px);
        left: 16px;
        right: 16px;
        display: flex;
        flex-direction: column;
        background: #ffffff;
        border: 1px solid var(--color-border);
        border-radius: 6px;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-12px);
        transition: opacity 0.25s var(--ease-premium), transform 0.25s var(--ease-premium),
            visibility 0.25s;
        z-index: 100;
        box-shadow: 0 8px 24px rgba(15, 23, 15, 0.1);
    }

    .Mobile-links.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .Mobile-links .link {
        padding: 16px 20px;
        text-decoration: none;
        color: var(--color-ink);
        font-family: var(--font-serif);
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--color-border-soft);
        border-left: 3px solid transparent;
        transition: background 0.2s var(--ease-premium), border-color 0.2s var(--ease-premium),
            padding-left 0.2s var(--ease-premium), color 0.2s var(--ease-premium);
    }

    .Mobile-links .link:last-child {
        border-bottom: none;
    }

    .Mobile-links .link:hover,
    .Mobile-links .link:focus-visible {
        background: var(--color-green-tint);
        border-left-color: var(--color-green);
        padding-left: 26px;
    }

    .Mobile-links .link.router-link-exact-active {
        border-left-color: var(--color-green);
        color: var(--color-green);
        font-weight: 600;
    }
}

/* accessibility: visible focus states */
.link:focus-visible,
.logo:focus-visible,
.icon-btn:focus-visible {
    outline: 2px solid var(--color-green);
    outline-offset: 3px;
    border-radius: 2px;
}

@media (prefers-reduced-motion: reduce) {

    .Container,
    .seal,
    .link::after,
    .link,
    .icon-btn,
    .icon-btn i,
    .Mobile-links,
    .Mobile-links .link {
        transition: none !important;
    }
}
</style>