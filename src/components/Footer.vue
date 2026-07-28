<template>
    <footer class="footer">

        <div class="container">

            <!-- Brand -->
            <div class="footer-brand">

                <RouterLink to="/" class="logo">
                    <img src="@/assets/images.jpeg" alt="OOU Chronicle">
                    <div>
                        <h2>OOU Chronicle</h2>
                        <p>News from the Blue Ridge Campus</p>
                    </div>
                </RouterLink>

                <p class="description">
                    Delivering trusted campus journalism, student stories,
                    research, sports and events across Olabisi Onabanjo
                    University.
                </p>

                <div class="socials">

                    <a href="#">
                        <i class="fab fa-facebook-f"></i>
                    </a>

                    <a href="#">
                        <i class="fab fa-x-twitter"></i>
                    </a>

                    <a href="#">
                        <i class="fab fa-instagram"></i>
                    </a>

                    <a href="#">
                        <i class="fab fa-linkedin-in"></i>
                    </a>

                </div>

            </div>

            <!-- Quick Links -->

            <div class="footer-links">

                <h3>Quick Links</h3>

                <RouterLink to="/">Home</RouterLink>

                <RouterLink to="/news">News</RouterLink>

                <RouterLink to="/about">About</RouterLink>

                <RouterLink to="/categories">Categories</RouterLink>

                <RouterLink to="/contact">Contact</RouterLink>

            </div>

            <!-- Categories -->

            <div class="footer-links">

                <h3>Browse Topics</h3>

                <RouterLink v-for="category in categories" :key="category.id" :to="`/category/${category.slug}`">
                    {{ category.name }}
                </RouterLink>

            </div>

            <!-- Newsletter -->

            <div class="newsletter">

                <h3>Newsletter</h3>

                <p>
                    Get the latest stories delivered to your inbox.
                </p>

                <form @submit.prevent="subscribe">

                    <input v-model="email" type="email" placeholder="Email address" required>

                    <button>
                        Subscribe
                    </button>

                </form>

            </div>

        </div>

        <div class="bottom">

            © {{ year }} OOU Chronicle. All rights reserved.

        </div>

    </footer>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import supabase from "@/lib/supabase";

const categories = ref([]);
const email = ref("");

const year = computed(() => new Date().getFullYear());

const getCategories = async () => {

    const { data } = await supabase
        .from("categories")
        .select("id, name, slug")
        .order("name")
        .limit(6);

    categories.value = data || [];

};

const subscribe = () => {

    alert("Newsletter feature coming soon.");

    email.value = "";

};

onMounted(() => {

    getCategories();

});
</script>
<style scoped>
.footer {

    background: #0f3d22;

    color: white;

    margin-top: 90px;

}

.container {

    width: min(1250px, 92%);

    margin: auto;

    display: grid;

    grid-template-columns: 1.6fr 1fr 1fr 1.2fr;

    gap: 60px;

    padding: 70px 0;

}

.logo {

    display: flex;

    align-items: center;

    gap: 14px;

    text-decoration: none;

    color: white;

    margin-bottom: 18px;

}

.logo img {

    width: 58px;

    height: 58px;

    border-radius: 50%;

    object-fit: cover;

}

.logo h2 {

    font-size: 1.4rem;

    margin-bottom: 4px;

}

.logo p {

    color: rgba(255, 255, 255, .7);

    font-size: .9rem;

}

.description {

    line-height: 1.8;

    color: rgba(255, 255, 255, .75);

    margin-bottom: 28px;

}

.socials {

    display: flex;

    gap: 14px;

}

.socials a {

    width: 42px;

    height: 42px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    background: rgba(255, 255, 255, .08);

    color: white;

    text-decoration: none;

    transition: .3s;

}

.socials a:hover {

    background: white;

    color: #14532d;

    transform: translateY(-3px);

}

.footer-links h3,
.newsletter h3 {

    font-size: 1.1rem;

    margin-bottom: 22px;

    position: relative;

}

.footer-links h3::after,
.newsletter h3::after {

    content: "";

    position: absolute;

    left: 0;

    bottom: -8px;

    width: 45px;

    height: 3px;

    background: #38b000;

    border-radius: 999px;

}

.footer-links {

    display: flex;
    flex-direction: column;

}

.footer-links a {

    text-decoration: none;

    color: rgba(255, 255, 255, .75);

    margin-bottom: 14px;

    transition: .3s;

    width: fit-content;

}

.footer-links a:hover {

    color: #ffffff;

    transform: translateX(6px);

}

/* Newsletter */

.newsletter p {

    color: rgba(255, 255, 255, .75);

    line-height: 1.7;

    margin-bottom: 20px;

}

.newsletter form {

    display: flex;
    flex-direction: column;

    gap: 14px;

}

.newsletter input {

    width: 100%;

    height: 50px;

    border: 1px solid rgba(255, 255, 255, .15);

    background: rgba(255, 255, 255, .08);

    color: white;

    padding: 0 16px;

    border-radius: 10px;

    outline: none;

    transition: .3s;

}

.newsletter input::placeholder {

    color: rgba(255, 255, 255, .55);

}

.newsletter input:focus {

    border-color: #38b000;

    background: rgba(255, 255, 255, .12);

}

.newsletter button {

    height: 50px;

    border: none;

    border-radius: 10px;

    background: white;

    color: #14532d;

    font-weight: 700;

    cursor: pointer;

    transition: .3s;

}

.newsletter button:hover {

    background: #38b000;

    color: white;

    transform: translateY(-2px);

}

/* Bottom */

.bottom {

    border-top: 1px solid rgba(255, 255, 255, .1);

    padding: 22px 0;

    text-align: center;

    color: rgba(255, 255, 255, .65);

    font-size: .9rem;

}

/* Responsive */

@media (max-width: 1100px) {

    .container {

        grid-template-columns: repeat(2, 1fr);

        gap: 40px;

    }

}

@media (max-width: 768px) {

    .container {

        grid-template-columns: 1fr;

        gap: 35px;

        padding: 55px 0;

    }

    .logo {

        justify-content: center;

        text-align: center;

    }

    .footer-brand {

        text-align: center;

    }

    .description {

        max-width: 500px;

        margin: 0 auto 24px;

    }

    .socials {

        justify-content: center;

    }

    .footer-links h3,
    .newsletter h3 {

        text-align: center;

    }

    .footer-links h3::after,
    .newsletter h3::after {

        left: 50%;

        transform: translateX(-50%);

    }

    .footer-links {

        align-items: center;

    }

    .newsletter {

        text-align: center;

    }

}

@media (max-width: 480px) {

    .container {

        width: 94%;

    }

    .logo {

        flex-direction: column;

    }

    .logo img {

        width: 70px;
        height: 70px;

    }

    .logo h2 {

        font-size: 1.3rem;

    }

    .socials {

        gap: 10px;

    }

    .socials a {

        width: 40px;
        height: 40px;

    }

}
</style>