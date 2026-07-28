<template>
    <section class="story">

        <div class="story-image">

            <img src="/src/assets/who.jpg" alt="Students on campus">

        </div>

        <div class="story-content">

            <span class="section-tag">
                WHO WE ARE
            </span>

            <h2>
                More Than a News Website.
            </h2>

            <p>
                OOU Chronicle was created with one simple idea: every student
                deserves access to reliable campus news. University life moves
                quickly, from academic announcements and student elections to
                sporting victories and memorable events. Our role is to bring
                those stories together in one place.
            </p>

            <p>
                We believe campus journalism should be clear, balanced and
                relevant. Whether you're a fresher trying to stay informed or a
                graduating student reflecting on your journey, OOU Chronicle
                aims to document the moments that shape university life.
            </p>

            <div class="highlights">

                <div>
                    <h3>Campus News</h3>
                    <p>Accurate reporting on university activities.</p>
                </div>

                <div>
                    <h3>Student Voices</h3>
                    <p>Opinions, features and experiences from students.</p>
                </div>

            </div>

        </div>

    </section>
</template>

<script setup>

</script>

<style scoped>
.story {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px;
    align-items: center;
    margin: 90px 0;
}

.story-image {
    overflow: hidden;
    border-radius: 18px;
}

.story-image img {
    width: 100%;
    height: 560px;
    object-fit: cover;
    display: block;
    transition: .4s;
}

.story-image:hover img {
    transform: scale(1.04);
}

.section-tag {
    color: #14532d;
    font-size: .8rem;
    font-weight: 700;
    letter-spacing: 2px;
}

.story-content h2 {
    margin: 18px 0 28px;
    font-size: 2.8rem;
    font-family: Georgia, serif;
    color: #111827;
}

.story-content p {
    color: #4b5563;
    line-height: 1.9;
    margin-bottom: 20px;
}

.highlights {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 35px;
}

.highlights div {
    border-top: 3px solid #14532d;
    padding-top: 18px;
}

.highlights h3 {
    margin-bottom: 8px;
    color: #111827;
}

.highlights p {
    margin: 0;
    font-size: .95rem;
    color: #6b7280;
}

@media(max-width:900px) {

    .story {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .story-image img {
        height: 380px;
    }

    .story-content h2 {
        font-size: 2.2rem;
    }

    .highlights {
        grid-template-columns: 1fr;
    }

}

@media(max-width:600px) {

    .story-content h2 {
        font-size: 1.8rem;
    }

    .story-image img {
        height: 280px;
    }

}
</style>