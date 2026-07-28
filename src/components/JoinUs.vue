<template>

    <section class="join">

        <div class="content">

            <span class="tag">
                GET INVOLVED
            </span>

            <h2>
                Have A Story Worth Sharing?
            </h2>

            <p>
                OOU Chronicle is always looking for thoughtful writers,
                photographers and student contributors. If you've witnessed
                something important on campus or have an idea that deserves
                attention, we'd love to hear from you.
            </p>

            <div class="buttons">

                <RouterLink to="/contact" class="primary-btn">
                    Become a Contributor
                </RouterLink>

                <RouterLink to="/news" class="secondary-btn">
                    Read Our Stories
                </RouterLink>

            </div>

        </div>

    </section>

</template>

<script setup>

</script>

<style scoped>
.join {

    margin: 120px 0 60px;

    padding: 70px;

    border: 1px solid #e5e7eb;

    border-radius: 20px;

    background: #fafafa;
}

.content {

    max-width: 700px;
}

.tag {

    color: #14532d;

    font-size: .8rem;

    font-weight: 700;

    letter-spacing: 2px;
}

.content h2 {

    margin: 18px 0;

    font-size: 2.8rem;

    font-family: Georgia, serif;

    color: #111827;
}

.content p {

    color: #6b7280;

    line-height: 1.9;

    margin-bottom: 35px;
}

.buttons {

    display: flex;

    gap: 18px;

    flex-wrap: wrap;
}

.primary-btn {

    padding: 15px 28px;

    background: #14532d;

    color: #fff;

    text-decoration: none;

    border-radius: 8px;

    font-weight: 600;

    transition: .3s;
}

.primary-btn:hover {

    background: #0f3d22;
}

.secondary-btn {

    padding: 15px 28px;

    border: 1px solid #d1d5db;

    color: #111827;

    text-decoration: none;

    border-radius: 8px;

    font-weight: 600;

    transition: .3s;
}

.secondary-btn:hover {

    border-color: #14532d;

    color: #14532d;
}

@media(max-width:768px) {

    .join {

        padding: 40px 25px;

    }

    .content h2 {

        font-size: 2rem;

    }

    .buttons {

        flex-direction: column;

    }

    .primary-btn,
    .secondary-btn {

        text-align: center;

    }

}
</style>