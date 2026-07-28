<template>

    <section class="faq">

        <div class="heading">

            <span class="section-tag">
                FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>
                Questions We Often Receive
            </h2>

            <p>
                Here are answers to some of the most common questions about
                OOU Chronicle, submissions and campus coverage.
            </p>

        </div>

        <div class="accordion">

            <div class="item" v-for="(faq, index) in faqs" :key="index">

                <button class="question" @click="toggle(index)">

                    <span>{{ faq.question }}</span>

                    <i :class="openIndex === index
                        ? 'fa-solid fa-minus'
                        : 'fa-solid fa-plus'"></i>

                </button>

                <transition name="accordion">

                    <div v-show="openIndex === index" class="answer">
                        {{ faq.answer }}
                    </div>

                </transition>

            </div>

        </div>

    </section>

</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(0)

const faqs = ref([
    {
        question: 'Can students contribute articles?',
        answer: 'Yes. We welcome thoughtful articles, opinion pieces, feature stories and campus reports from students across the university.'
    },
    {
        question: 'How do I submit a news tip?',
        answer: 'You can send us a message through the contact form or email our editorial team with the details and any supporting evidence.'
    },
    {
        question: 'Can OOU Chronicle cover my event?',
        answer: 'Absolutely. If your event is relevant to the university community, reach out in advance so our team can make arrangements.'
    },
    {
        question: 'How can I advertise on OOU Chronicle?',
        answer: 'Businesses, organizations and student associations can contact us directly to discuss available advertising opportunities.'
    },
    {
        question: 'How long does it take to receive a reply?',
        answer: 'We usually respond within one to three working days depending on the nature of your enquiry.'
    }
])

const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index
}
</script>

<style scoped>
.faq {

    margin: 120px 0;
}

.heading {

    max-width: 650px;

    margin-bottom: 50px;
}

.section-tag {

    color: #14532d;

    font-size: .8rem;

    font-weight: 700;

    letter-spacing: 2px;
}

.heading h2 {

    margin: 18px 0;

    font-size: 2.7rem;

    font-family: Georgia, serif;

    color: #111827;
}

.heading p {

    color: #6b7280;

    line-height: 1.9;
}

.accordion {

    border-top: 1px solid #e5e7eb;
}

.item {

    border-bottom: 1px solid #e5e7eb;
}

.question {

    width: 100%;

    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 24px 0;

    border: none;

    background: none;

    cursor: pointer;

    font-size: 1.1rem;

    font-weight: 600;

    color: #111827;

    text-align: left;
}

.question i {

    color: #14532d;

    font-size: .9rem;
}

.answer {

    padding: 0 0 24px;

    color: #6b7280;

    line-height: 1.9;

    max-width: 850px;
}

.accordion-enter-active,
.accordion-leave-active {

    transition: all .25s ease;
}

.accordion-enter-from,
.accordion-leave-to {

    opacity: 0;

    transform: translateY(-8px);
}

@media(max-width:768px) {

    .heading h2 {

        font-size: 2rem;
    }

    .question {

        font-size: 1rem;
    }

}
</style>