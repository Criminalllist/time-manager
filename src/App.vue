<template>
  <TheHeader @go-to-timeline="setPage(PAGE_TIMELINE)" @go-to-progress="setPage(PAGE_PROGRESS)" />
  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNavigation :current-page="currentPage" @navigate="setPage($event)" />
</template>

<script setup>
import { ref } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '@/helpers/constants'
import TheHeader from './components/TheHeader.vue'
import TheNavigation from './components/TheNavigation.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import { normalizeHash } from './helpers/functions'
import { generateTimelineItems } from '@/helpers/functions'

const timelineItems = generateTimelineItems()

const currentPage = ref(normalizeHash())

function setPage(page) {
  currentPage.value = page
}
</script>

<style lang="scss" scoped></style>
