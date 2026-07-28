<template>

    <section class="contact-info">

        <div class="info">

            <span class="section-tag">
                CONTACT INFORMATION
            </span>

            <h2>
                Reach Out Anytime
            </h2>

            <p class="intro">
                We're always open to hearing from students, staff, alumni and
                members of the university community.
            </p>

            <div class="info-list">

                <div class="item">

                    <div class="icon">
                        <i class="fa-solid fa-envelope"></i>
                    </div>

                    <div>

                        <h3>Email</h3>

                        <p>hameedrauf445@gmail.com</p>

                    </div>

                </div>

                <div class="item">

                    <div class="icon">
                        <i class="fa-solid fa-phone"></i>
                    </div>

                    <div>

                        <h3>Phone</h3>

                        <p>+234 904 333 9536</p>

                    </div>

                </div>

                <div class="item">

                    <div class="icon">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>

                    <div>

                        <h3>Office</h3>

                        <p>
                            Student Affairs Building <br>
                            Olabisi Onabanjo University <br>
                            Ago-Iwoye, Ogun State
                        </p>

                    </div>

                </div>

            </div>

        </div>

        <aside class="hours">

            <span class="small-title">
                OFFICE HOURS
            </span>

            <div class="schedule">

                <div class="row">

                    <span>Monday</span>

                    <span>8:00 AM – 5:00 PM</span>

                </div>

                <div class="row">

                    <span>Tuesday</span>

                    <span>8:00 AM – 5:00 PM</span>

                </div>

                <div class="row">

                    <span>Wednesday</span>

                    <span>8:00 AM – 5:00 PM</span>

                </div>

                <div class="row">

                    <span>Thursday</span>

                    <span>8:00 AM – 5:00 PM</span>

                </div>

                <div class="row">

                    <span>Friday</span>

                    <span>8:00 AM – 5:00 PM</span>

                </div>

                <div class="row">

                    <span>Weekend</span>

                    <span>Closed</span>

                </div>

            </div>

        </aside>

    </section>

</template>

<script setup>

</script>

<style scoped>
.contact-info {

    display: grid;

    grid-template-columns: 2fr 1fr;

    gap: 70px;

    margin-bottom: 120px;

}

.section-tag {

    color: #14532d;

    font-size: .8rem;

    font-weight: 700;

    letter-spacing: 2px;

}

.info h2 {

    font-size: 2.6rem;

    margin: 15px 0;

    font-family: Georgia, serif;

    color: #111827;

}

.intro {

    color: #6b7280;

    line-height: 1.9;

    margin-bottom: 40px;

}

.info-list {

    display: flex;

    flex-direction: column;

    gap: 30px;

}

.item {

    display: flex;

    gap: 20px;

    align-items: flex-start;

    padding-bottom: 25px;

    border-bottom: 1px solid #ececec;

}

.item:last-child {

    border: none;

}

.icon {

    width: 55px;

    height: 55px;

    border-radius: 50%;

    background: #f3f4f6;

    display: flex;

    justify-content: center;

    align-items: center;

    flex-shrink: 0;

}

.icon i {

    color: #14532d;

    font-size: 1.2rem;

}

.item h3 {

    margin-bottom: 8px;

    color: #111827;

}

.item p {

    color: #6b7280;

    line-height: 1.8;

}

.hours {

    padding: 35px;

    border: 1px solid #e5e7eb;

    border-radius: 16px;

    height: fit-content;

}

.small-title {

    color: #14532d;

    font-size: .8rem;

    font-weight: 700;

    letter-spacing: 2px;

}

.schedule {

    margin-top: 30px;

}

.row {

    display: flex;

    justify-content: space-between;

    padding: 18px 0;

    border-bottom: 1px solid #ececec;

    color: #374151;

}

.row:last-child {

    border: none;

}

@media(max-width:900px) {

    .contact-info {

        grid-template-columns: 1fr;

        gap: 50px;

    }

    .info h2 {

        font-size: 2rem;

    }

    .hours {

        padding: 25px;

    }

}
</style>