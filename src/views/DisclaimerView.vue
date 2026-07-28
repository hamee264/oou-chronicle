<template>

    <main class="legal-page">

        <section class="hero">

            <span class="section-tag">
                LEGAL
            </span>

            <h1>
                Disclaimer
            </h1>

            <p>
                This Disclaimer explains the nature of the content published on
                OOU Chronicle and outlines the limitations of our responsibility
                regarding the information available on this website.
            </p>

            <small>
                Last Updated: July 2026
            </small>

        </section>

        <section class="content">

            <article>

                <h2>General Information</h2>

                <p>
                    OOU Chronicle is an independent campus news platform created
                    to inform, educate and engage members of the Olabisi
                    Onabanjo University community.
                </p>

            </article>

            <article>

                <h2>Accuracy of Information</h2>

                <p>
                    We strive to publish accurate and timely information.
                    However, we cannot guarantee that every article will always
                    be complete, current or free from errors. Readers are
                    encouraged to verify important information with official
                    university authorities.
                </p>

            </article>

            <article>

                <h2>Sample & Historical Content</h2>

                <p>
                    Some articles published on OOU Chronicle may reference past
                    events, historical information or sample content created for
                    website development, testing or demonstration purposes.
                    Such content should not always be interpreted as current
                    university announcements or real-time news.
                </p>

            </article>

            <article>

                <h2>External Links</h2>

                <p>
                    OOU Chronicle may provide links to external websites for
                    additional information. We are not responsible for the
                    content, accuracy or privacy practices of third-party
                    websites.
                </p>

            </article>

            <article>

                <h2>No Professional Advice</h2>

                <p>
                    The information published on this website is intended for
                    general informational purposes only and should not be
                    considered legal, financial, academic or professional
                    advice.
                </p>

            </article>

            <article>

                <h2>Changes</h2>

                <p>
                    This Disclaimer may be updated from time to time. Continued
                    use of the website constitutes acceptance of any revisions.
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