<template>

    <main class="legal-page">

        <section class="hero">

            <span class="section-tag">
                LEGAL
            </span>

            <h1>
                Terms & Conditions
            </h1>

            <p>
                These Terms & Conditions govern your use of OOU Chronicle. By
                accessing this website, you agree to comply with these terms.
            </p>

            <small>
                Last Updated: July 2026
            </small>

        </section>

        <section class="content">

            <article>

                <h2>Acceptance of Terms</h2>

                <p>
                    By using OOU Chronicle, you acknowledge that you have read,
                    understood and agreed to these Terms & Conditions. If you do
                    not agree, please discontinue using the website.
                </p>

            </article>

            <article>

                <h2>Use of the Website</h2>

                <p>
                    You agree to use OOU Chronicle only for lawful purposes.
                    Activities that disrupt, damage or interfere with the
                    website or its users are strictly prohibited.
                </p>

            </article>

            <article>

                <h2>Content Ownership</h2>

                <p>
                    Unless otherwise stated, articles, photographs, graphics,
                    logos and other materials published on OOU Chronicle are the
                    intellectual property of OOU Chronicle and may not be copied,
                    reproduced or redistributed without permission.
                </p>

            </article>

            <article>

                <h2>User Conduct</h2>

                <ul>

                    <li>Do not post misleading or false information.</li>

                    <li>Do not impersonate another person.</li>

                    <li>Do not attempt to compromise website security.</li>

                    <li>Respect copyright and intellectual property rights.</li>

                </ul>

            </article>

            <article>

                <h2>External Links</h2>

                <p>
                    OOU Chronicle may contain links to third-party websites. We
                    do not control or endorse the content or privacy practices
                    of those websites.
                </p>

            </article>

            <article>

                <h2>Limitation of Liability</h2>

                <p>
                    While we strive for accuracy, OOU Chronicle does not
                    guarantee that all published information will always be
                    complete, accurate or up to date. Use of the website is at
                    your own discretion.
                </p>

            </article>

            <article>

                <h2>Changes to These Terms</h2>

                <p>
                    We may update these Terms & Conditions from time to time.
                    Continued use of the website after changes are published
                    constitutes acceptance of the revised terms.
                </p>

            </article>

            <article>

                <h2>Contact</h2>

                <p>
                    Questions regarding these Terms & Conditions can be sent
                    through our Contact page.
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
    margin-bottom: 16px;

}

.content ul {

    padding-left: 20px;

}

.content li {

    margin-bottom: 12px;
    color: #4b5563;
    line-height: 1.8;

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