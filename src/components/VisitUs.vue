<template>

    <section class="visit">

        <div class="content">

            <span class="section-tag">
                VISIT OUR OFFICE
            </span>

            <h2>
                Stop By And Say Hello
            </h2>

            <p>
                If you're on campus, you're always welcome to visit our
                editorial office. Whether it's a news tip, collaboration,
                or simply a question, we'd be happy to meet you.
            </p>

            <div class="details">

                <div class="detail">

                    <i class="fa-solid fa-location-dot"></i>

                    <div>

                        <h3>Office Address</h3>

                        <p>
                            Student Affairs Building <br>
                            Olabisi Onabanjo University <br>
                            Ago-Iwoye, Ogun State
                        </p>

                    </div>

                </div>

                <div class="detail">

                    <i class="fa-solid fa-clock"></i>

                    <div>

                        <h3>Office Hours</h3>

                        <p>
                            Monday – Friday <br>
                            8:00 AM – 5:00 PM
                        </p>

                    </div>

                </div>

            </div>

            <a href="https://maps.google.com" target="_blank" class="map-link">
                View on Google Maps

                <i class="fa-solid fa-arrow-up-right-from-square"></i>

            </a>

        </div>

        <div class="map">

            <iframe src="https://www.google.com/maps?q=Olabisi+Onabanjo+University,+Ago-Iwoye&output=embed"
                loading="lazy" allowfullscreen>
            </iframe>

        </div>

    </section>

</template>

<script setup>

</script>

<style scoped>
.visit {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 60px;

    margin: 120px 0;
}

.section-tag {

    color: #14532d;

    font-size: .8rem;

    font-weight: 700;

    letter-spacing: 2px;
}

.content h2 {

    margin: 18px 0;

    font-size: 2.6rem;

    font-family: Georgia, serif;

    color: #111827;
}

.content>p {

    color: #6b7280;

    line-height: 1.9;

    margin-bottom: 40px;
}

.details {

    display: flex;

    flex-direction: column;

    gap: 28px;

    margin-bottom: 35px;
}

.detail {

    display: flex;

    gap: 18px;
}

.detail i {

    width: 50px;

    height: 50px;

    border-radius: 50%;

    background: #f3f4f6;

    color: #14532d;

    display: flex;

    justify-content: center;

    align-items: center;

    flex-shrink: 0;
}

.detail h3 {

    margin-bottom: 8px;

    color: #111827;
}

.detail p {

    color: #6b7280;

    line-height: 1.8;
}

.map-link {

    display: inline-flex;

    align-items: center;

    gap: 10px;

    text-decoration: none;

    color: #14532d;

    font-weight: 600;

    transition: .3s;
}

.map-link:hover {

    gap: 16px;
}

.map {

    overflow: hidden;

    border-radius: 16px;

    border: 1px solid #e5e7eb;
}

.map iframe {

    width: 100%;

    height: 100%;

    min-height: 420px;

    border: none;
}

@media(max-width:900px) {

    .visit {

        grid-template-columns: 1fr;

        gap: 50px;

    }

    .content h2 {

        font-size: 2rem;

    }

    .map iframe {

        min-height: 320px;

    }

}
</style>