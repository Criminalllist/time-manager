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

defineProps({
  timelineItems: { type: Object, required: true }
})
</script>

<style lang="scss" scoped></style>
