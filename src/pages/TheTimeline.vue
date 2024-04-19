<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
      />
    </ul>
  </div>
</template>

<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { generateTimelineItems } from '@/helpers/functions'
const timelineItems = generateTimelineItems()
</script>

<style lang="scss" scoped></style>
