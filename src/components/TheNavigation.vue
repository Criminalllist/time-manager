<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavigationItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': page === currentPage }"
        @click="emit('navigate', page)"
      >
        <component :is="icon" class="h-6 w-6" />{{ page }}
      </NavigationItem>
    </ul>
  </nav>
</template>

<script setup>
import NavigationItem from './NavigationItem.vue'
import { NAV_ITEMS } from '@/helpers/constants'

defineProps({
  currentPage: { type: String, required: true }
})

const emit = defineEmits(['navigate'])
</script>

<style lang="scss" scoped></style>
