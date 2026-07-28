<template>

    <section class="team">

        <div class="heading">

            <span>THE PEOPLE BEHIND OOU CHRONICLE</span>

            <h2>
                A Small Team With A Shared Purpose
            </h2>

            <p>
                Behind every article is a team committed to informing,
                documenting and celebrating life at Olabisi Onabanjo
                University.
            </p>

        </div>

        <div class="team-grid">

            <article class="member" v-for="member in members" :key="member.id">

                <div class="image">

                    <img :src="member.image" :alt="member.name">

                </div>

                <div class="info">

                    <h3>{{ member.name }}</h3>

                    <span>{{ member.role }}</span>

                    <p>
                        {{ member.bio }}
                    </p>

                </div>

            </article>

        </div>

    </section>

</template>

<script setup>
import { ref } from 'vue'

const members = ref([
    {
        id: 1,
        name: 'John Adebayo',
        role: 'Editor-in-Chief',
        bio: 'Leads editorial direction and oversees all published content.',
        image: '/src/assets/faceless.png'
    },
    {
        id: 2,
        name: 'Aisha Bello',
        role: 'Managing Editor',
        bio: 'Coordinates writers, editors and newsroom operations.',
        image: '/src/assets/faceless.png'
    },
    {
        id: 3,
        name: 'David Ogunleye',
        role: 'Campus Reporter',
        bio: 'Reports on student activities, university events and announcements.',
        image: '/src/assets/faceless.png'
    },
    {
        id: 4,
        name: 'Grace Adeyemi',
        role: 'Photojournalist',
        bio: 'Captures moments that define campus life through photography.',
        image: '/src/assets/faceless.png'
    }
])
</script>

<style scoped>
.team {
    margin: 120px 0;
}

.heading {

    max-width: 650px;

    margin-bottom: 55px;
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
}

.heading p {

    color: #6b7280;

    line-height: 1.9;
}

.team-grid {

    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 28px;
}

.member {

    transition: .3s;
}

.member:hover {

    transform: translateY(-5px);
}

.image {

    overflow: hidden;

    border-radius: 14px;

    margin-bottom: 20px;
}

.image img {

    width: 100%;

    height: 340px;

    object-fit: cover;

    display: block;

    transition: .4s;
}

.member:hover img {

    transform: scale(1.05);
}

.info h3 {

    margin-bottom: 6px;

    color: #111827;

    font-size: 1.3rem;
}

.info span {

    color: #14532d;

    font-size: .9rem;

    font-weight: 600;
}

.info p {

    margin-top: 15px;

    color: #6b7280;

    line-height: 1.8;
}

@media(max-width:1000px) {

    .team-grid {

        grid-template-columns: repeat(2, 1fr);

    }

}

@media(max-width:650px) {

    .team-grid {

        grid-template-columns: 1fr;

    }

    .heading h2 {

        font-size: 2rem;

    }

    .image img {

        height: 300px;

    }

}
</style>