<template>
    <div>
        <Transition name="toast">

            <div v-if="showMessage" class="toast" :class="messageType">

                <i class="fa-solid" :class="messageType === 'success'

                    ? 'fa-circle-check'

                    : 'fa-circle-exclamation'"></i>

                <span>

                    {{ message }}

                </span>

            </div>

        </Transition>
        <footer class="footer">

            <div class="container">

                <!-- Brand -->

                <section class="footer-brand">

                    <RouterLink to="/" class="logo">

                        <img src="@/assets/images.jpeg" alt="OOU Chronicle">

                        <div>

                            <h2>OOU Chronicle</h2>

                            <span>Campus News & Stories</span>

                        </div>

                    </RouterLink>

                    <p class="description">

                        OOU Chronicle is an independent campus news platform dedicated
                        to informing, educating and connecting the Olabisi Onabanjo
                        University community through credible journalism and impactful
                        storytelling.

                    </p>

                    <div class="socials">

                        <a href="#" aria-label="Facebook">

                            <i class="fab fa-facebook-f"></i>

                        </a>

                        <a href="#" aria-label="Instagram">

                            <i class="fab fa-instagram"></i>

                        </a>

                        <a href="#" aria-label="X">

                            <i class="fab fa-x-twitter"></i>

                        </a>

                        <a href="https://wa.me/2349043339536" target="_blank" rel="noopener" aria-label="WhatsApp">

                            <i class="fab fa-whatsapp"></i>

                        </a>

                    </div>

                </section>

                <!-- Quick Links -->

                <section class="footer-links">

                    <h3>

                        Explore

                    </h3>

                    <RouterLink to="/">
                        Home
                    </RouterLink>

                    <RouterLink to="/news">
                        Latest News
                    </RouterLink>

                    <RouterLink to="/categories">
                        Categories
                    </RouterLink>

                    <RouterLink to="/search">
                        Search
                    </RouterLink>

                    <RouterLink to="/about">
                        About
                    </RouterLink>

                    <RouterLink to="/contact">
                        Contact
                    </RouterLink>

                </section>

                <!-- Resources -->

                <section class="footer-links">

                    <h3>

                        Resources

                    </h3>

                    <RouterLink to="/editorial-policy">

                        Editorial Policy

                    </RouterLink>

                    <RouterLink to="/contact">

                        Advertise With Us

                    </RouterLink>

                    <RouterLink to="/contact">

                        Submit A Story

                    </RouterLink>

                    <RouterLink to="/contact">

                        Contact Editorial

                    </RouterLink>

                </section>

                <!-- Legal -->

                <section class="footer-links">

                    <h3>

                        Legal

                    </h3>

                    <RouterLink to="/privacy-policy">

                        Privacy Policy

                    </RouterLink>

                    <RouterLink to="/terms">

                        Terms & Conditions

                    </RouterLink>

                    <RouterLink to="/disclaimer">

                        Disclaimer

                    </RouterLink>

                    <RouterLink to="/editorial-policy">

                        Editorial Policy

                    </RouterLink>

                </section>

                <!-- Newsletter -->

                <section class="newsletter">

                    <h3>

                        Stay Updated

                    </h3>

                    <p>

                        Get the latest stories, campus events and announcements
                        delivered to your inbox.

                    </p>

                    <form @submit.prevent="subscribe">

                        <input type="email" v-model="email" placeholder="Enter your email">

                        <button>

                            Subscribe

                        </button>

                    </form>

                    <small>

                        No spam. Unsubscribe anytime.

                    </small>

                </section>

            </div>

            <div class="footer-bottom">

                <div class="container bottom">

                    <p>

                        © {{ year }} OOU Chronicle.
                        All Rights Reserved.

                    </p>

                    <p>

                        Designed & Developed by

                        <a href="https://github.com/hamee264" target="_blank" rel="noopener">

                            Hameed AbdulRauf(BEANDEV)

                        </a>

                    </p>

                </div>

            </div>

        </footer>
    </div>
</template>
<script setup>
import { ref } from "vue";

const year = new Date().getFullYear();

const email = ref("");

const showMessage = ref(false);

const message = ref("");

const messageType = ref("success");

const subscribe = () => {

    if (!email.value.trim()) {

        message.value = "Please enter your email address.";

        messageType.value = "error";

        showMessage.value = true;

        setTimeout(() => {

            showMessage.value = false;

        }, 3000);

        return;

    }

    // Later you'll save to Supabase here

    message.value = "🎉 This feature will be available soon";

    messageType.value = "success";

    showMessage.value = true;

    email.value = "";

    setTimeout(() => {

        showMessage.value = false;

    }, 3500);

};
</script>
<style scoped>
.footer {

    margin-top: 120px;

    background: #f8faf8;

    border-top: 1px solid #d1d5db;

    color: #111827;

}

.container {

    width: min(1250px, 92%);

    margin: auto;

}

.footer>.container {

    display: grid;

    grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;

    gap: 60px;

    padding: 80px 0;

}

.logo {

    display: flex;

    align-items: center;

    gap: 16px;

    text-decoration: none;

    color: #111827;

    margin-bottom: 24px;

}

.logo img {

    width: 58px;

    height: 58px;

    object-fit: cover;

    border-radius: 12px;

}

.logo h2 {

    font-size: 1.4rem;

    margin-bottom: 3px;

}

.logo span {

    color: #6b7280;

    font-size: .85rem;

}

.description {

    color: #6b7280;

    line-height: 1.9;

    margin-bottom: 28px;

    max-width: 340px;

}

.socials {

    display: flex;

    gap: 14px;

}

.socials a {

    width: 42px;

    height: 42px;

    display: flex;

    justify-content: center;

    align-items: center;

    border-radius: 50%;

    background: #f3f4f6;

    color: #14532d;

    text-decoration: none;

    transition: .35s;

}

.socials a:hover {

    background: #14532d;

    color: #fff;
    transform: translateY(-4px);

}

.footer-links {

    display: flex;

    flex-direction: column;

}

.footer-links h3,

.newsletter h3 {

    font-size: 1.1rem;

    margin-bottom: 22px;

    color: #14532d;

    position: relative;

}

.footer-links h3::after,

.newsletter h3::after {

    content: "";

    position: absolute;

    left: 0;

    bottom: -10px;

    width: 45px;

    height: 3px;

    border-radius: 999px;

    background: #22c55e;

}

.footer-links a {

    text-decoration: none;

    color: #4b5563;

    margin-bottom: 14px;

    transition: .3s;

    width: fit-content;

}

.footer-links a:hover {

    color: #14532d;

    transform: translateX(6px);

}

.newsletter p {

    color: #cbd5e1;

    line-height: 1.8;

    margin-bottom: 22px;

}

.newsletter form {

    display: flex;

    flex-direction: column;

    gap: 14px;

}

.newsletter input {

    height: 52px;

    border: none;

    border-radius: 10px;

    padding: 0 18px;

    outline: none;

    font-size: .95rem;

}

.newsletter button {

    height: 52px;

    border: none;

    border-radius: 10px;

    background: #14532d;

    color: white;

    cursor: pointer;

    font-weight: 600;

    transition: .3s;

}

.newsletter button:hover {

    background: #166534;

}

.newsletter small {

    display: block;

    margin-top: 16px;

    color: #94a3b8;

}

.footer-bottom {

    border-top: 1px solid #e5e7eb;

}

.bottom {

    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 20px;

    padding: 26px 0;

}

.bottom p {

    color: #6b7280;

    font-size: .92rem;

    line-height: 1.7;

}

.bottom a {

    color: #22c55e;

    text-decoration: none;

    font-weight: 600;

    transition: .3s;

}

.bottom a:hover {

    color: #4ade80;

}

/* ===========================
   Large Tablets
=========================== */

@media(max-width:1100px) {

    .footer>.container {

        grid-template-columns: repeat(2, 1fr);

        gap: 50px;

    }

    .description {

        max-width: 100%;

    }

}

/* ===========================
   Tablets
=========================== */

@media(max-width:768px) {

    .footer {

        margin-top: 80px;

    }

    .footer>.container {

        grid-template-columns: 1fr;

        gap: 45px;

        padding: 60px 0;

        text-align: left;

    }

    .footer-brand {

        text-align: left;

    }

    .logo {

        justify-content: flex-start;

    }

    .description {

        margin-left: 0;

        margin-right: 0;

    }

    .socials {

        justify-content: flex-start;

    }

    .footer-links {

        align-items: flex-start;

    }

    .footer-links a {

        text-align: left;

    }

    .newsletter {

        text-align: left;

    }

    .newsletter form {

        width: 100%;

    }

    .newsletter input,

    .newsletter button {

        width: 100%;

    }

    .bottom {

        flex-direction: column;

        align-items: flex-start;

        text-align: left;

        padding: 22px 0;

    }

    .bottom p {

        margin: 0;

    }

}

/* ===========================
   Phones
=========================== */

@media(max-width:480px) {

    .footer>.container {

        padding: 50px 0;

        gap: 38px;

    }

    .logo img {

        width: 50px;

        height: 50px;

    }

    .logo h2 {

        font-size: 1.25rem;

    }

    .logo span {

        font-size: .8rem;

    }

    .description {

        font-size: .95rem;

        line-height: 1.8;

    }

    .footer-links h3,

    .newsletter h3 {

        font-size: 1rem;

    }

    .footer-links a {

        font-size: .95rem;

    }

    .newsletter p {

        font-size: .95rem;

    }

    .newsletter input,

    .newsletter button {

        height: 48px;

    }

    .bottom {

        padding: 18px 0;

    }

    .bottom p {

        font-size: .85rem;

    }

}

/* ==========================
   Toast Notification
========================== */

.toast {

    position: fixed;

    top: 30px;

    right: 30px;

    display: flex;

    align-items: center;

    gap: 14px;

    min-width: 320px;

    max-width: 420px;

    padding: 18px 22px;

    border-radius: 12px;

    color: #fff;

    z-index: 9999;

    box-shadow: 0 20px 50px rgba(0, 0, 0, .18);

}

.toast.success {

    background: #14532d;

}

.toast.error {

    background: #dc2626;

}

.toast i {

    font-size: 1.3rem;

}

.toast span {

    line-height: 1.6;

    font-size: .95rem;

}

/* Animation */

.toast-enter-active,
.toast-leave-active {

    transition: all .35s ease;

}

.toast-enter-from {

    opacity: 0;

    transform: translateX(80px);

}

.toast-leave-to {

    opacity: 0;

    transform: translateY(-20px);

}

@media(max-width:768px) {

    .toast {

        left: 15px;

        right: 15px;

        top: 15px;

        min-width: auto;

        max-width: none;

    }

}
</style>