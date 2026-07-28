<template>

    <section class="coverage">

        <div class="heading">

            <span>WHAT WE COVER</span>

            <h2>
                Stories That Matter To The OOU Community
            </h2>

            <p>
                From important university announcements to student life,
                OOU Chronicle covers the people, events and conversations
                shaping our campus every day.
            </p>

        </div>

        <div class="coverage-grid">

            <article class="item">

                <i class="fa-solid fa-building-columns"></i>

                <h3>Campus News</h3>

                <p>
                    Official announcements, university updates and
                    important developments across campus.
                </p>

            </article>

            <article class="item">

                <i class="fa-solid fa-graduation-cap"></i>

                <h3>Academics</h3>

                <p>
                    Examination updates, faculty activities,
                    research and educational opportunities.
                </p>

            </article>

            <article class="item">

                <i class="fa-solid fa-futbol"></i>

                <h3>Sports</h3>

                <p>
                    Match reports, competitions, athletes
                    and sporting achievements.
                </p>

            </article>

            <article class="item">

                <i class="fa-solid fa-users"></i>

                <h3>Student Life</h3>

                <p>
                    Everyday experiences, student organizations,
                    culture and campus lifestyle.
                </p>

            </article>

            <article class="item">

                <i class="fa-solid fa-calendar-days"></i>

                <h3>Events</h3>

                <p>
                    Conferences, seminars, workshops,
                    ceremonies and community activities.
                </p>

            </article>

            <article class="item">

                <i class="fa-solid fa-pen-nib"></i>

                <h3>Opinion</h3>

                <p>
                    Editorials, student opinions and
                    thoughtful perspectives on campus issues.
                </p>

            </article>

        </div>

    </section>

</template>

<script setup>

</script>

<style scoped>
.coverage {
    margin: 100px 0;
}

.heading {
    max-width: 650px;
    margin-bottom: 60px;
}

.heading span {

    color: #14532d;

    font-size: .8rem;

    letter-spacing: 2px;

    font-weight: 700;
}

.heading h2 {

    margin: 15px 0;

    font-size: 2.8rem;

    font-family: Georgia, serif;

    color: #111827;
}

.heading p {

    color: #6b7280;

    line-height: 1.9;
}

.coverage-grid {

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 28px;
}

.item {

    padding: 35px;

    border: 1px solid #e5e7eb;

    border-radius: 16px;

    transition: .3s;

    background: #fff;
}

.item:hover {

    transform: translateY(-6px);

    border-color: #14532d;
}

.item i {

    font-size: 2rem;

    color: #14532d;

    margin-bottom: 22px;
}

.item h3 {

    margin-bottom: 15px;

    color: #111827;
}

.item p {

    color: #6b7280;

    line-height: 1.8;
}

@media(max-width:900px) {

    .coverage-grid {

        grid-template-columns: repeat(2, 1fr);
    }

}

@media(max-width:650px) {

    .coverage-grid {

        grid-template-columns: 1fr;
    }

    .heading h2 {

        font-size: 2rem;
    }

    .item {

        padding: 28px;
    }

}
</style>