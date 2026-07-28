<template>
    <header class="Container" :class="{ 'is-scrolled': isScrolled }">

        <TopBar />

        <!-- Dateline -->
        <div class="dateline">

            <div class="dateline-left">
                <span>Olabisi Onabanjo University</span>
                <span class="dot">•</span>
                <span>{{ editionDate }}</span>
                <span class="dot">•</span>
                <span>Campus Edition</span>
            </div>

            <div class="dateline-right">
                <span>Independent Student Newspaper</span>
            </div>

        </div>

        <!-- Desktop Navbar -->
        <div class="navbar desktop-navbar">

            <!-- Logo -->
            <RouterLink to="/" class="logo">

                <div class="seal">
                    <img src="/src/assets/images.jpeg" alt="OOU Chronicle">
                </div>

                <div class="logo-text">
                    <h1>OOU Chronicle</h1>
                    <p>The Voice of the Blue Ridge Campus</p>
                </div>

            </RouterLink>

            <!-- Navigation -->
            <nav class="links">

                <RouterLink class="link" to="/">
                    Home
                </RouterLink>

                <RouterLink class="link" to="/news">
                    News
                </RouterLink>

                <RouterLink class="link" to="/about">
                    About
                </RouterLink>

                <RouterLink class="link" to="/categories">
                    Categories
                </RouterLink>

            </nav>

            <!-- Right Action -->
            <div class="navbar-right">

                <RouterLink class="contact-btn" to="/contact">
                    Contact
                </RouterLink>

            </div>

        </div>

        <div class="rule"></div>

        <!-- Mobile Navbar -->

        <div class="mobile-navbar">

            <RouterLink to="/" class="mobile-brand">

                <img src="/src/assets/images.jpeg" alt="OOU Chronicle">

            </RouterLink>

            <button class="icon-btn" @click="toggleMenu">

                <i :class="menuOpen
                    ? 'fa-solid fa-xmark'
                    : 'fa-solid fa-bars'"></i>

            </button>

            <nav class="Mobile-links" :class="{ open: menuOpen }">

                <RouterLink class="link" to="/" @click="menuOpen = false">
                    Home
                </RouterLink>

                <RouterLink class="link" to="/news" @click="menuOpen = false">
                    News
                </RouterLink>

                <RouterLink class="link" to="/about" @click="menuOpen = false">
                    About
                </RouterLink>

                <RouterLink class="link" to="/categories" @click="menuOpen = false">
                    Categories
                </RouterLink>

                <RouterLink class="link" to="/contact" @click="menuOpen = false">
                    Contact
                </RouterLink>

            </nav>

        </div>

        <div v-if="menuOpen" class="overlay" @click="menuOpen = false">
        </div>

    </header>
</template>

<script setup>
import TopBar from "./TopBar.vue";
import { ref, computed, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

const editionDate = computed(() =>
    new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    })
);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 8;
};

const handleKeydown = (e) => {
    if (e.key === "Escape") {
        menuOpen.value = false;
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll, {
        passive: true,
    });

    window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("keydown", handleKeydown);
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Public+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap");

.Container {
    --black: #111111;
    --text: #222222;
    --muted: #707070;
    --border: #e8e8e8;
    --border-soft: #f3f3f3;
    --green: #14532d;
    --green-light: #edf6ef;

    --font-serif: "Fraunces", serif;
    --font-sans: "Public Sans", sans-serif;
    --font-mono: "IBM Plex Mono", monospace;

    position: sticky;
    top: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    background: #fff;
    transition: .25s ease;
}

.Container.is-scrolled {
    box-shadow: 0 4px 18px rgba(0, 0, 0, .06);
}

/* ==========================
   DATELINE
========================== */

.dateline {
    height: 40px;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border);
    font-family: var(--font-mono);
    font-size: .72rem;
    text-transform: uppercase;
    letter-spacing: .08em;
    color: var(--muted);
    background: #fff;
}

.dateline-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.dateline-right {
    color: var(--green);
    font-weight: 600;
}

.dot {
    color: #bdbdbd;
}

/* ==========================
   NAVBAR
========================== */

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 40px;
    transition: .25s ease;
}

.Container.is-scrolled .navbar {
    padding: 14px 40px;
}

/* ==========================
   LOGO
========================== */

.logo {
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
}

.seal {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid var(--border);
    flex-shrink: 0;
    transition: .25s;
}

.logo:hover .seal {
    transform: scale(1.05);
}

.seal img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.logo-text h1 {
    margin: 0;
    font-family: var(--font-serif);
    font-size: 2rem;
    color: var(--black);
    line-height: 1;
    letter-spacing: -.02em;
}

.logo-text p {
    margin-top: 6px;
    color: var(--muted);
    font-size: .82rem;
    font-style: italic;
}

/* ==========================
   NAV LINKS
========================== */

.links {
    display: flex;
    align-items: center;
    gap: 3.2rem;
}

.link {
    position: relative;
    text-decoration: none;
    color: var(--text);
    font-size: .82rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .08em;
    transition: .25s;
}

.link::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -8px;
    width: 100%;
    height: 2px;
    background: var(--green);
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    transition: .25s;
}

.link:hover,
.link.router-link-exact-active {
    color: var(--green);
}

.link:hover::after,
.link.router-link-exact-active::after {
    transform: translateX(-50%) scaleX(1);
}

/* ==========================
   CONTACT BUTTON
========================== */

.navbar-right {
    display: flex;
    align-items: center;
}

.contact-btn {
    text-decoration: none;
    color: var(--black);
    border: 1px solid var(--black);
    padding: 11px 22px;
    font-size: .78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .08em;
    transition: .25s ease;
}

.contact-btn:hover {
    background: var(--black);
    color: #fff;
}

/* ==========================
   RULE
========================== */

.rule {
    height: 2px;
    background: var(--black);
    position: relative;
}

.rule::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3px;
    height: 1px;
    background: var(--border);
}

/* ==========================
   MOBILE NAVBAR
========================== */

.mobile-navbar {
    display: none;
}

.overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .35);
    backdrop-filter: blur(2px);
    z-index: 90;
}

/* ==========================
   TABLET
========================== */

@media (max-width:950px) {

    .navbar {
        padding: 16px 24px;
    }

    .Container.is-scrolled .navbar {
        padding: 14px 24px;
    }

    .dateline {
        padding: 0 24px;
        font-size: .66rem;
    }

    .logo-text h1 {
        font-size: 1.6rem;
    }

    .logo-text p {
        font-size: .72rem;
    }

    .links {
        gap: 2rem;
    }

    .link {
        font-size: .74rem;
    }

    .contact-btn {
        padding: 10px 18px;
        font-size: .72rem;
    }

}

/* ==========================
   MOBILE
========================== */

@media (max-width:800px) {

    .desktop-navbar {
        display: none;
    }

    .dateline {
        display: none;
    }

    .rule {
        display: none;
    }

    .mobile-navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 18px;
        position: relative;
        background: #fff;
        border-bottom: 1px solid var(--border);
        z-index: 100;
    }

    .mobile-brand {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    .mobile-brand img {
        width: 52px;
        height: 52px;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid var(--border);
    }

    .icon-btn {
        width: 44px;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: #fff;
        color: var(--black);
        cursor: pointer;
        transition: .25s;
    }

    .icon-btn i {
        font-size: 1.3rem;
    }

    .icon-btn:hover {
        color: var(--green);
    }

    .Mobile-links {
        position: absolute;
        top: calc(100% + 10px);
        left: 18px;
        right: 18px;

        display: flex;
        flex-direction: column;

        background: #fff;

        border: 1px solid var(--border);

        box-shadow: 0 18px 40px rgba(0, 0, 0, .08);

        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);

        transition: .25s ease;

        z-index: 100;
    }

    .Mobile-links.open {

        opacity: 1;

        visibility: visible;

        transform: translateY(0);

    }

    .Mobile-links .link {

        padding: 18px 20px;

        text-transform: none;

        letter-spacing: 0;

        font-size: 1rem;

        color: var(--text);

        border-bottom: 1px solid var(--border-soft);

    }

    .Mobile-links .link:last-child {

        border-bottom: none;

    }

    .Mobile-links .link::after {

        display: none;

    }

    .Mobile-links .link:hover {

        background: var(--green-light);

        color: var(--green);

        padding-left: 28px;

    }

    .Mobile-links .router-link-exact-active {

        color: var(--green);

        background: var(--green-light);

        border-left: 3px solid var(--green);

        padding-left: 25px;

    }

}

/* ==========================
   SMALL PHONES
========================== */

@media (max-width:420px) {

    .mobile-navbar {

        padding: 12px 14px;

    }

    .mobile-brand img {

        width: 46px;

        height: 46px;

    }

}

/* ==========================
   ACCESSIBILITY
========================== */

.logo:focus-visible,
.link:focus-visible,
.contact-btn:focus-visible,
.icon-btn:focus-visible {

    outline: 2px solid var(--green);

    outline-offset: 4px;

}

/* ==========================
   REDUCED MOTION
========================== */

@media (prefers-reduced-motion:reduce) {

    *,
    *::before,
    *::after {

        transition: none !important;

        animation: none !important;

    }

}
</style>