<template>
  <li class="relative flex flex-column gap-2 border-t border-gray-200 py-10 px-4">
    <a href="#" :class="hourLinksClasses">{{ timelineItem.hour }}:00</a>

    <BaseSelect
      :options="options"
      placeholder="Rest"
      :selected="setSelectedOption"
      name="activities"
    />
  </li>
</template>

<script setup>
import BaseSelect from '@/components/BaseSelect.vue'
const props = defineProps({
  timelineItem: {
    type: Object,
    required: true
  }
})

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' }
]

const setSelectedOption = 0

const hourLinksClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounder  px-2 font-mono text-lg',
  currentHour()
]

function currentHour() {
  return props.timelineItem.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
}
</script>

<style lang="scss" scoped></style>
