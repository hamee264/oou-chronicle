<template>
    <section class="newsletter">

        <div class="newsletter-content">

            <div class="newsletter-left">

                <span class="tag">
                    Newsletter
                </span>

                <h2>
                    Stay Ahead of Campus News
                </h2>

                <p>
                    Get the latest news, announcements, events and student
                    stories from OOU Chronicle delivered straight to your inbox.
                    No spam. Just quality campus journalism.
                </p>

                <div class="features">

                    <div class="feature">
                        <i class="fa-solid fa-newspaper"></i>
                        Daily News
                    </div>

                    <div class="feature">
                        <i class="fa-solid fa-calendar-days"></i>
                        Campus Events
                    </div>

                    <div class="feature">
                        <i class="fa-solid fa-bell"></i>
                        Breaking Updates
                    </div>

                </div>

            </div>

            <div class="newsletter-right">

                <h3>Join Our Community</h3>

                <form>

                    <input type="text" placeholder="Your Name">

                    <input type="email" placeholder="Email Address">

                    <button>
                        Subscribe
                    </button>

                </form>

            </div>

        </div>

    </section>
</template>

<script setup>

</script>

<style scoped>
.newsletter {
    width: min(1200px, 92%);
    margin: 90px auto;
}

.newsletter-content {
    background: #14532d;
    color: white;
    border-radius: 18px;
    padding: 55px;
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 50px;
}

.tag {
    display: inline-block;
    padding: 6px 14px;
    background: rgba(255, 255, 255, .15);
    border-radius: 30px;
    font-size: .8rem;
    margin-bottom: 20px;
}

.newsletter-left h2 {
    font-size: 2.3rem;
    line-height: 1.3;
    margin-bottom: 20px;
    font-family: Georgia, serif;
}

.newsletter-left p {
    line-height: 1.9;
    color: #d1fae5;
}

.features {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 35px;
}

.feature {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255, 255, 255, .1);
    padding: 12px 18px;
    border-radius: 10px;
}

.newsletter-right {
    background: white;
    color: #111827;
    border-radius: 14px;
    padding: 30px;
}

.newsletter-right h3 {
    margin-bottom: 25px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

input {
    padding: 15px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    outline: none;
}

input:focus {
    border-color: #14532d;
}

button {
    border: none;
    background: #14532d;
    color: white;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: .3s;
}

button:hover {
    background: #0f4424;
}

@media(max-width:900px) {

    .newsletter-content {
        grid-template-columns: 1fr;
        padding: 35px;
    }

    .newsletter-left h2 {
        font-size: 1.8rem;
    }

}
</style>