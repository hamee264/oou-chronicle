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

            <RouterLink to="/" class="mobile-brand" @click="menuOpen = false">

                <img src="/src/assets/images.jpeg" alt="OOU Chronicle">

            </RouterLink>

            <button class="icon-btn" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="Toggle menu"
                :aria-expanded="menuOpen">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>

            <nav class="Mobile-links" :class="{ open: menuOpen }">

                <div class="mobile-menu-head">
                    <span>{{ editionDate }}</span>
                    <span class="dot">•</span>
                    <span>Campus Edition</span>
                </div>

                <RouterLink class="link" to="/" @click="menuOpen = false">
                    <span class="link-num">01</span>
                    <span>Home</span>
                </RouterLink>

                <RouterLink class="link" to="/news" @click="menuOpen = false">
                    <span class="link-num">02</span>
                    <span>News</span>
                </RouterLink>

                <RouterLink class="link" to="/about" @click="menuOpen = false">
                    <span class="link-num">03</span>
                    <span>About</span>
                </RouterLink>

                <RouterLink class="link" to="/categories" @click="menuOpen = false">
                    <span class="link-num">04</span>
                    <span>Categories</span>
                </RouterLink>

                <RouterLink class="link" to="/contact" @click="menuOpen = false">
                    <span class="link-num">05</span>
                    <span>Contact</span>
                </RouterLink>

                <div class="mobile-menu-foot">
                    <span>Olabisi Onabanjo University</span>
                    <span class="mobile-menu-foot-sub">Independent Student Newspaper</span>
                </div>

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
        /* border-bottom: 1px solid var(--border); */

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
        /* border-bottom: 1px solid var(--border); */
        z-index: 100;
        border-bottom: #14532d 2px solid;
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

    /* Animated hamburger -> X */
    .icon-btn {
        width: 44px;
        height: 44px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 0;
        z-index: 110;
    }

    .icon-btn .bar {
        width: 22px;
        height: 2px;
        background: var(--black);
        transition: .3s ease;
        transform-origin: center;
    }

    .icon-btn:hover .bar {
        background: var(--green);
    }

    .icon-btn.active .bar {
        background: var(--green);
    }

    .icon-btn.active .bar:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
    }

    .icon-btn.active .bar:nth-child(2) {
        opacity: 0;
    }

    .icon-btn.active .bar:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
    }

    /* Slide-in edition drawer */
    .Mobile-links {
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: min(78vw, 320px);

        display: flex;
        flex-direction: column;

        background: #fff;
        border-left: 1px solid var(--border);
        box-shadow: -18px 0 40px rgba(0, 0, 0, .12);

        padding-top: 84px;

        transform: translateX(100%);
        visibility: hidden;
        transition: transform .35s cubic-bezier(.16, 1, .3, 1), visibility 0s .35s;

        z-index: 100;
    }

    .Mobile-links.open {
        transform: translateX(0);
        visibility: visible;
        transition: transform .35s cubic-bezier(.16, 1, .3, 1);
    }

    .mobile-menu-head {
        padding: 0 24px 18px;
        margin-bottom: 4px;
        border-bottom: 1px solid var(--border);
        font-family: var(--font-mono);
        font-size: .66rem;
        text-transform: uppercase;
        letter-spacing: .08em;
        color: var(--muted);
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .Mobile-links .link {

        display: flex;
        align-items: baseline;
        gap: 14px;

        padding: 16px 24px;

        text-transform: none;

        letter-spacing: 0;

        font-family: var(--font-serif);
        font-size: 1.1rem;
        font-weight: 600;

        color: var(--text);
        text-decoration: none;

        border-bottom: 1px solid var(--border-soft);

    }

    .link-num {
        font-family: var(--font-mono);
        font-size: .7rem;
        font-weight: 500;
        color: var(--muted);
        letter-spacing: 0;
    }

    .Mobile-links .link:last-of-type {

        border-bottom: none;

    }

    .Mobile-links .link:hover {

        background: var(--green-light);

        color: var(--green);

    }

    .Mobile-links .link:hover .link-num {
        color: var(--green);
    }

    .Mobile-links .router-link-exact-active {

        color: var(--green);

        background: var(--green-light);

        border-left: 3px solid var(--green);

        padding-left: 21px;

    }

    .Mobile-links .router-link-exact-active .link-num {
        color: var(--green);
    }

    .mobile-menu-foot {
        margin-top: auto;
        padding: 20px 24px 28px;
        border-top: 1px solid var(--border);
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .mobile-menu-foot span:first-child {
        font-family: var(--font-serif);
        font-weight: 600;
        font-size: .92rem;
        color: var(--black);
    }

    .mobile-menu-foot-sub {
        font-size: .74rem;
        font-style: italic;
        color: var(--muted);
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

    .Mobile-links {
        width: 82vw;
        padding-top: 76px;
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