<template>

    <section class="contact-form">

        <div class="left">

            <span class="section-tag">
                SEND A MESSAGE
            </span>

            <h2>
                Tell Us What's Happening.
            </h2>

            <p>
                Have a news tip? Want us to cover an event? Interested in
                contributing to OOU Chronicle? Fill out the form and a member
                of our editorial team will get back to you.
            </p>

            <blockquote>
                "Good journalism begins with listening."
            </blockquote>

        </div>

        <div class="right">

            <form @submit.prevent="sendToWhatsApp">

                <div class="field">

                    <label>Full Name</label>

                    <input v-model="name" type="text" placeholder="Enter your name">

                </div>

                <div class="field">

                    <label>Your Message</label>

                    <textarea v-model="message" rows="8"
                        placeholder="Tell us about your news tip, event, enquiry or feedback..."></textarea>

                </div>

                <button type="submit">

                    <i class="fa-brands fa-whatsapp"></i>

                    Send Message

                </button>

            </form>
        </div>

    </section>

</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const message = ref("");

const sendToWhatsApp = () => {

    if (!name.value.trim() || !message.value.trim()) {

        alert("Please fill in all fields.");

        return;

    }

    const text = `*📰 OOU Chronicle Contact*

👤 *Name:*
${name.value}

💬 *Message:*
${message.value}`;

    const url = `https://wa.me/2349043339536?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    name.value = "";
    message.value = "";

};
</script>
<style scoped>
.contact-form {

    display: grid;

    grid-template-columns: 380px 1fr;

    gap: 70px;

    margin: 120px 0;

}

.section-tag {

    color: #14532d;

    font-size: .8rem;

    letter-spacing: 2px;

    font-weight: 700;

}

.left h2 {

    margin: 18px 0;

    font-size: 2.6rem;

    font-family: Georgia, serif;

    color: #111827;

}

.left p {

    color: #6b7280;

    line-height: 1.9;

    margin-bottom: 40px;

}

blockquote {

    margin: 0;

    padding-left: 20px;

    border-left: 4px solid #14532d;

    font-style: italic;

    color: #374151;

    line-height: 1.8;

}

.grid {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 25px;

}

.field {

    display: flex;

    flex-direction: column;

    margin-bottom: 25px;

}

label {

    margin-bottom: 10px;

    font-weight: 600;

    color: #111827;

}

input,
textarea {

    padding: 16px;

    border: 1px solid #d1d5db;

    border-radius: 8px;

    outline: none;

    font-size: 1rem;

    font-family: inherit;

    transition: .3s;

}

input:focus,
textarea:focus {

    border-color: #14532d;

}

textarea {

    resize: vertical;

}

button {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 10px;

    margin-top: 10px;

    padding: 15px 30px;

    border: none;

    border-radius: 8px;

    background: #25D366;

    color: #fff;

    font-size: 1rem;

    font-weight: 600;

    cursor: pointer;

    transition: .3s;

}

button:hover {

    background: #1ebe5d;

    transform: translateY(-2px);

}

button i {

    font-size: 1.15rem;

}

@media(max-width:900px) {

    .contact-form {

        grid-template-columns: 1fr;

        gap: 50px;

    }

    .grid {

        grid-template-columns: 1fr;

    }

    .left h2 {

        font-size: 2rem;

    }

}
</style>