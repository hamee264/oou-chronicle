<template>

    <section class="principles">

        <div class="left">

            <span class="section-tag">
                EDITORIAL PRINCIPLES
            </span>

            <h2>
                Journalism Built On Trust.
            </h2>

            <p>
                Every story we publish follows the same standards. We believe
                campus journalism should inform, educate and represent the
                university community responsibly.
            </p>

        </div>

        <div class="right">

            <article class="principle">

                <span>01</span>

                <div>

                    <h3>Accuracy</h3>

                    <p>
                        We verify information before publication and correct
                        errors whenever necessary.
                    </p>

                </div>

            </article>

            <article class="principle">

                <span>02</span>

                <div>

                    <h3>Independence</h3>

                    <p>
                        Our reporting remains objective and free from personal
                        or political influence.
                    </p>

                </div>

            </article>

            <article class="principle">

                <span>03</span>

                <div>

                    <h3>Fairness</h3>

                    <p>
                        Every story deserves balance, context and respect for
                        different perspectives.
                    </p>

                </div>

            </article>

            <article class="principle">

                <span>04</span>

                <div>

                    <h3>Community First</h3>

                    <p>
                        We exist to serve students, staff and alumni by telling
                        stories that matter.
                    </p>

                </div>

            </article>

        </div>

    </section>

</template>

<script setup>

</script>

<style scoped>
.principles {

    display: grid;
    grid-template-columns: 420px 1fr;
    align-items: start;
    gap: 80px;
    position: relative;
    margin: 120px 0;
}

.section-tag {

    font-size: .8rem;

    letter-spacing: 2px;

    color: #14532d;

    font-weight: 700;
}

.left {
    position: sticky;
    top: 200px;
}

.left h2 {

    font-size: 2.7rem;

    margin: 18px 0;

    font-family: Georgia, serif;

    color: #111827;
}

.left p {

    color: #6b7280;

    line-height: 1.9;
}

.right {

    display: flex;

    flex-direction: column;

    gap: 35px;
}

.principle {

    display: flex;

    gap: 30px;

    padding-bottom: 30px;

    border-bottom: 1px solid #e5e7eb;
}

.principle:last-child {

    border: none;
}

.principle span {

    font-size: 2rem;

    font-family: Georgia, serif;

    color: #14532d;

    min-width: 55px;
}

.principle h3 {

    margin-bottom: 10px;

    font-size: 1.25rem;

    color: #111827;
}

.principle p {

    color: #6b7280;

    line-height: 1.8;
}

@media(max-width:900px) {

    .principles {

        grid-template-columns: 1fr;

        gap: 50px;
    }

    .left h2 {

        font-size: 2.1rem;
    }

}
</style>