<template>
  <a :href="`#${PAGE_PROGRESS}`" class="text-sm">
    <p v-if="true" class="flex items-center gap-1">
      Day complete! <CheckCircleIcon class="h-7 text-green-500" />
    </p>

    <div v-else class="flex items-center gap-1">
      <p>Progress: <span class="font-mono"> 20%</span></p>
      <p class="h-3 w-3 rounded-full bg-red-500"></p>
    </div>
  </a>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { PAGE_PROGRESS } from '@/helpers/constants'
</script>

<style lang="scss" scoped></style>
