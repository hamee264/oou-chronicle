<template>
    <section class="comments">

        <div class="section-title">
            <h2>Comments</h2>
            <span>{{ comments.length }} Comments</span>
        </div>

        <!-- Existing Comments -->
        <div class="comment" v-for="comment in comments" :key="comment.id">

            <div class="avatar">
                {{ comment.name.charAt(0) }}
            </div>

            <div class="comment-content">

                <div class="comment-header">

                    <h4>{{ comment.name }}</h4>

                    <small>{{ comment.date }}</small>

                </div>

                <p>
                    {{ comment.message }}
                </p>

                <button>
                    <i class="fa-solid fa-reply"></i>
                    Reply
                </button>

            </div>

        </div>

        <!-- Leave Comment -->

        <div class="comment-form">

            <h3>Leave a Comment</h3>

            <p>
                Your email address will not be published.
            </p>

            <div class="row">

                <input type="text" placeholder="Your Name">

                <input type="email" placeholder="Email Address">

            </div>

            <textarea rows="7" placeholder="Write your comment..."></textarea>

            <button class="submit-btn">
                Post Comment
            </button>

        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue'

const comments = ref([
    {
        id: 1,
        name: 'Adebayo',
        date: 'July 19, 2026',
        message:
            'This article was very informative. Thanks for keeping students updated.'
    },
    {
        id: 2,
        name: 'Mary',
        date: 'July 18, 2026',
        message:
            'Looking forward to more campus news like this.'
    }
])
</script>

<style scoped>
.comments {
    margin-top: 70px;
}

.section-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
}

.section-title h2 {
    font-size: 2rem;
    font-family: Georgia, serif;
    color: #111827;
}

.section-title span {
    color: #6b7280;
}

.comment {
    display: flex;
    gap: 20px;
    padding: 25px 0;
    border-bottom: 1px solid #e5e7eb;
}

.avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #14532d;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1.2rem;
    flex-shrink: 0;
}

.comment-content {
    flex: 1;
}

.comment-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
}

.comment-header h4 {
    color: #111827;
}

.comment-header small {
    color: #6b7280;
}

.comment-content p {
    line-height: 1.8;
    color: #4b5563;
}

.comment-content button {
    margin-top: 15px;
    background: none;
    border: none;
    color: #14532d;
    cursor: pointer;
    font-weight: 600;
}

.comment-form {
    margin-top: 60px;
    padding: 35px;
    background: #f8fafc;
    border-radius: 18px;
    border: 1px solid #e5e7eb;
}

.comment-form h3 {
    font-size: 1.6rem;
    margin-bottom: 8px;
    color: #111827;
}

.comment-form p {
    color: #6b7280;
    margin-bottom: 25px;
}

.row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 20px;
}

input,
textarea {
    width: 100%;
    padding: 15px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    outline: none;
    font-size: .95rem;
}

input:focus,
textarea:focus {
    border-color: #14532d;
}

textarea {
    resize: vertical;
    margin-bottom: 20px;
}

.submit-btn {
    background: #14532d;
    color: white;
    border: none;
    padding: 15px 35px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: .3s;
}

.submit-btn:hover {
    background: #0f4424;
}

@media(max-width:768px) {

    .section-title {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .comment {
        flex-direction: column;
    }

    .comment-header {
        flex-direction: column;
        gap: 6px;
    }

    .row {
        grid-template-columns: 1fr;
    }

    .comment-form {
        padding: 25px;
    }

}
</style>