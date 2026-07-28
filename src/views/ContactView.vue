<template>

    <main class="contact-page">

        <ContactHero />

        <ContactInfo />

        <ContactForm />

        <ContactFAQ />

        <VisitUs />

    </main>

</template>

<script setup>
import ContactHero from '@/components/ContactHero.vue'
import ContactInfo from '@/components/ContactInfo.vue'
import ContactForm from '@/components/ContactForm.vue'
import ContactFAQ from '@/components/ContactFAQ.vue'
import VisitUs from '@/components/VisitUs.vue'
</script>

<style scoped>
.contact-page {
    width: min(1200px, 92%);
    margin: auto;
    padding: 60px 0 100px;
}
</style>