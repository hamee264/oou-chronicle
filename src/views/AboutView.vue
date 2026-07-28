<template>
    <main class="about-page">

        <AboutHero />

        <OurStory />

        <WhatWeCover />

        <MissionVision />

        <CoreValues />

        <EditorialTeam />

        <Statistics />

        <JoinUs />

    </main>
</template>

<script setup>
import AboutHero from '@/components/AboutHero.vue'
import OurStory from '@/components/OurStory.vue'
import WhatWeCover from '../components/WhatWeCover.vue'
import MissionVision from '@/components/MissionVision.vue'
import ByTheNumbers from '@/components/ByTheNumbers.vue'
import CoreValues from '@/components/CoreValues.vue'
import EditorialTeam from '@/components/EditorialTeam.vue'
import Statistics from '@/components/Statistics.vue'
import JoinUs from '@/components/JoinUs.vue'
</script>

<style scoped>
.about-page {
    width: min(1250px, 92%);
    margin: 40px auto 80px;
}
</style>