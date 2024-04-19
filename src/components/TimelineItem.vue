<template>
  <li class="relative flex flex-column gap-2 border-t border-gray-200 py-10 px-4">
    <a href="#" :class="hourLinksClasses">{{ timelineItem.hour }}:00</a>

    <div class="w-full flex gap-2">
      <button
        class="rounded bg-gray-100 p-3 enables:hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <XMarkIcon class="h-8" />
      </button>

      <select name="activities" class="w-full truncate rounder bg-gray-100 py-1 px-2">
        <option value="rest" selected disabled>Rest</option>
        <option v-for="{ value, label } in activities" :key="value" :value="value">
          {{ label }}
        </option>
      </select>
    </div>
  </li>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
const props = defineProps(['timelineItem'])

const activities = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' }
]

const currentHour = () => {
  return props.timelineItem.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
}

const hourLinksClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounder  px-2 font-mono text-lg',
  currentHour()
]
</script>

<style lang="scss" scoped></style>
