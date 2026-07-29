<template>

    <section class="founder">

        <div class="heading">

            <span>MEET THE FOUNDER</span>

            <h2>
                Built By One Person. Inspired By An Entire Campus.
            </h2>

            <p>
                OOU Chronicle is currently designed, developed and managed by
                a single founder with a passion for campus journalism,
                technology and storytelling. As the platform grows, it will
                welcome writers, editors and contributors from across the
                university community.
            </p>

        </div>

        <div class="founder-card">

            <div class="image">

                <img :src="founder.image" :alt="founder.name">

            </div>

            <div class="content">

                <span class="role">

                    {{ founder.role }}

                </span>

                <h3>

                    {{ founder.name }}

                </h3>

                <p>

                    {{ founder.bio }}

                </p>

                <div class="stats">

                    <div class="stat">

                        <h4>2026</h4>

                        <span>Founded</span>

                    </div>

                    <div class="stat">

                        <h4>1</h4>

                        <span>Founder</span>

                    </div>

                    <div class="stat">

                        <h4>∞</h4>

                        <span>Vision</span>

                    </div>

                </div>

            </div>

        </div>

    </section>

</template>

<script setup>

const founder = {

    name: "Hameed AbdulRauf",

    role: "Founder & Developer",

    bio: "I founded OOU Chronicle to create a modern digital newspaper dedicated to Olabisi Onabanjo University. Every aspect of this platform—from design and development to content management and publishing—is currently handled by me. My goal is to build a trusted source of campus news while creating opportunities for students to contribute their voices in the future.",

    image: "/src/assets/faceless.png"

}

</script>

<style scoped>
.founder {

    margin: 120px 0;

}

.heading {

    max-width: 700px;

    margin-bottom: 60px;

}

.heading span {

    color: #14532d;

    font-size: .8rem;

    letter-spacing: 2px;

    font-weight: 700;

}

.heading h2 {

    margin: 18px 0;

    font-size: 2.7rem;

    font-family: Georgia, serif;

    color: #111827;

    line-height: 1.2;

}

.heading p {

    color: #6b7280;

    line-height: 1.9;

}

.founder-card {

    display: grid;

    grid-template-columns: 340px 1fr;

    gap: 60px;

    align-items: center;

    padding: 35px;

    border: 1px solid #e5e7eb;

    border-radius: 18px;

    background: #fff;

}

.image {

    overflow: hidden;

    border-radius: 16px;

}

.image img {

    width: 100%;

    height: 420px;

    object-fit: cover;

    display: block;

    transition: .4s;

}

.founder-card:hover img {

    transform: scale(1.05);

}

.role {

    display: inline-block;

    padding: 8px 14px;

    background: #14532d;

    color: #fff;

    border-radius: 30px;

    font-size: .8rem;

    font-weight: 600;

    margin-bottom: 18px;

}

.content h3 {

    font-size: 2.2rem;

    color: #111827;

    margin-bottom: 20px;

    font-family: Georgia, serif;

}

.content p {

    color: #6b7280;

    line-height: 2;

    margin-bottom: 40px;

}

.stats {

    display: flex;

    gap: 50px;

}

.stat h4 {

    font-size: 2rem;

    color: #14532d;

    margin-bottom: 6px;

    font-family: Georgia, serif;

}

.stat span {

    color: #6b7280;

    font-size: .9rem;

}

@media(max-width:950px) {

    .founder-card {

        grid-template-columns: 1fr;

        gap: 40px;

    }

    .image img {

        height: 380px;

    }

}

@media(max-width:650px) {

    .heading h2 {

        font-size: 2rem;

    }

    .founder-card {

        padding: 24px;

    }

    .image img {

        height: 300px;

    }

    .content h3 {

        font-size: 1.8rem;

    }

    .stats {

        justify-content: space-between;

        gap: 20px;

    }

    .stat h4 {

        font-size: 1.5rem;

    }

}
</style>