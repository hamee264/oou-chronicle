<template>

    <section class="numbers">

        <div class="heading">

            <span>BY THE NUMBERS</span>

            <h2>
                OOU Chronicle In Numbers
            </h2>

            <p>
                Every article contributes to a growing archive of stories that
                document life across Olabisi Onabanjo University.
            </p>

        </div>

        <div class="stats">

            <article class="stat" v-for="stat in stats" :key="stat.id">

                <h3>{{ stat.value }}</h3>

                <span>{{ stat.title }}</span>

            </article>

        </div>

    </section>

</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
    {
        id: 1,
        value: "300+",
        title: "Published Articles"
    },
    {
        id: 2,
        value: "25+",
        title: "Student Contributors"
    },
    {
        id: 3,
        value: "12",
        title: "News Categories"
    },
    {
        id: 4,
        value: "20K+",
        title: "Monthly Readers"
    }
])
</script>

<style scoped>
.numbers {

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

.stats {

    display: grid;

    grid-template-columns: repeat(4, 1fr);

    border-top: 1px solid #e5e7eb;

    border-bottom: 1px solid #e5e7eb;
}

.stat {

    padding: 45px 20px;

    text-align: center;

    border-right: 1px solid #e5e7eb;
}

.stat:last-child {

    border-right: none;
}

.stat h3 {

    font-size: 3rem;

    font-family: Georgia, serif;

    color: #14532d;

    margin-bottom: 10px;
}

.stat span {

    color: #6b7280;

    font-size: .95rem;
}

@media(max-width:900px) {

    .stats {

        grid-template-columns: repeat(2, 1fr);

    }

    .stat:nth-child(2) {

        border-right: none;

    }

    .stat:nth-child(-n+2) {

        border-bottom: 1px solid #e5e7eb;

    }

}

@media(max-width:600px) {

    .stats {

        grid-template-columns: 1fr;

    }

    .stat {

        border-right: none;

        border-bottom: 1px solid #e5e7eb;

    }

    .stat:last-child {

        border-bottom: none;

    }

    .heading h2 {

        font-size: 2rem;

    }

    .stat h3 {

        font-size: 2.4rem;

    }

}
</style>