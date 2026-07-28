<template>
    <div class="container">

        <div class="date">
            Saturday, July 19, 2026
        </div>

        <div class="breaking-news">
            <span class="badge">
                <span class="dot"></span>
                Breaking
            </span>

            <span class="news">
                OOU Releases 2026/2027 Academic Calendar
            </span>
        </div>

        <div class="social-icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 8px 40px;

    background: #0f3f22;
    color: #fff;

    border-bottom: 1px solid rgba(255, 255, 255, .08);
}

.date {
    font-size: .82rem;
    color: rgba(255, 255, 255, .75);
    white-space: nowrap;
}

.breaking-news {
    display: flex;
    align-items: center;
    gap: 12px;

    flex: 1;
    justify-content: center;
}


.social-icons {

    display: flex;

    align-items: center;

    gap: 16px;
}

.social-icons i {

    cursor: pointer;

    font-size: .9rem;

    color: rgba(255, 255, 255, .75);

    transition: .25s;
}

.social-icons i:hover {

    color: white;

    transform: translateY(-1px);
}

.news {

    font-size: .84rem;

    font-weight: 500;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;
}

.badge {

    background: #c1121f;

    padding: 3px 8px;

    border-radius: 3px;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: .08em;

    text-transform: uppercase;
}

.dot {
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-right: 6px;
}

@media(max-width:768px) {

    .social-icons {
        display: none;
    }

    .container {
        padding: 8px 16px;
    }

    .breaking-news {
        justify-content: flex-start;
    }

    .news {
        max-width: 180px;
    }

}
</style>