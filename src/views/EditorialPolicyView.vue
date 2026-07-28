<template>

    <main class="legal-page">

        <section class="hero">

            <span class="section-tag">
                OUR STANDARDS
            </span>

            <h1>
                Editorial Policy
            </h1>

            <p>
                OOU Chronicle is committed to responsible journalism that serves
                the university community with accuracy, fairness and integrity.
                This Editorial Policy outlines the standards that guide every
                story we publish.
            </p>

            <small>
                Last Updated: July 2026
            </small>

        </section>

        <section class="content">

            <article>

                <h2>Our Mission</h2>

                <p>
                    OOU Chronicle exists to inform, educate and connect the
                    Olabisi Onabanjo University community through credible,
                    relevant and engaging journalism. We aim to highlight campus
                    developments, student achievements, academic activities and
                    issues that matter to our readers.
                </p>

            </article>

            <article>

                <h2>Accuracy & Verification</h2>

                <p>
                    Every effort is made to verify information before
                    publication. Our editorial team cross-checks facts using
                    reliable sources and seeks confirmation whenever possible.
                </p>

            </article>

            <article>

                <h2>Fairness & Balance</h2>

                <p>
                    We strive to present stories fairly and objectively,
                    providing context and representing different viewpoints
                    where appropriate. Individuals or organizations mentioned in
                    our reporting should have a reasonable opportunity to
                    respond when necessary.
                </p>

            </article>

            <article>

                <h2>Editorial Independence</h2>

                <p>
                    Editorial decisions are made independently and are not
                    influenced by advertisers, sponsors or external interests.
                    Our priority is to serve the OOU community with trustworthy
                    reporting.
                </p>

            </article>

            <article>

                <h2>Corrections</h2>

                <p>
                    If an error is identified after publication, we will review
                    it promptly and make corrections where necessary. Readers
                    are encouraged to notify us if they believe any published
                    information is inaccurate.
                </p>

            </article>

            <article>

                <h2>Opinion Content</h2>

                <p>
                    Opinion pieces reflect the views of their respective authors
                    and do not necessarily represent the official position of
                    OOU Chronicle.
                </p>

            </article>

            <article>

                <h2>Community Standards</h2>

                <p>
                    We are committed to respectful, inclusive and responsible
                    journalism. We avoid discriminatory language, misinformation
                    and content that may cause unnecessary harm.
                </p>

            </article>

            <article>

                <h2>Contact the Editorial Team</h2>

                <p>
                    Questions, corrections or editorial enquiries can be
                    submitted through our Contact page. We value feedback from
                    students, staff, alumni and members of the university
                    community.
                </p>

            </article>

        </section>

    </main>

</template>

<script setup>

</script>

<style scoped>
.legal-page {

    width: min(1150px, 92%);
    margin: 70px auto 100px;

}

.hero {

    max-width: 760px;
    margin-bottom: 80px;

}

.section-tag {

    display: inline-block;

    color: #14532d;

    font-size: .8rem;

    font-weight: 700;

    letter-spacing: 2px;

    margin-bottom: 18px;

}

.hero h1 {

    font-size: 3.2rem;

    font-family: Georgia, serif;

    color: #111827;

    margin-bottom: 22px;

}

.hero p {

    color: #6b7280;

    line-height: 1.9;

    margin-bottom: 20px;

}

.hero small {

    color: #9ca3af;

}

.content {

    display: flex;

    flex-direction: column;

    gap: 55px;

}

.content article {

    border-bottom: 1px solid #e5e7eb;

    padding-bottom: 35px;

}

.content article:last-child {

    border: none;

}

.content h2 {

    font-size: 1.45rem;

    margin-bottom: 18px;

    color: #111827;

}

.content p {

    color: #4b5563;

    line-height: 1.9;

}

@media(max-width:768px) {

    .hero {

        margin-bottom: 50px;

    }

    .hero h1 {

        font-size: 2.3rem;

    }

    .content {

        gap: 40px;

    }

}
</style>