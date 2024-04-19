<template>
  <div class="w-full flex gap-2">
    <BaseButton>
      <XMarkIcon class="h-8" />
    </BaseButton>

    <select v-bind="$attrs" class="w-full truncate rounder bg-gray-100 py-1 px-2">
      <option value="rest" selected disabled>{{ placeholder }}</option>
      <option
        v-for="{ value, label } in activities"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
defineProps(['activities', 'placeholder', 'selected'])

defineOptions({
  inheritAttrs: false
})
</script>

<style lang="scss" scoped></style>
