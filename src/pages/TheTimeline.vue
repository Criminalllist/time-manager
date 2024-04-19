<template>
  <div class="mt-7">
    <ul>
      <li
        v-for="i in [0, 1, 2, 3, 4, 5]"
        :key="i"
        class="relative flex flex-column gap-2 border-t border-gray-200 py-10 px-4"
      >
        <a
          href="#"
          class="absolute -top-4 left-1/2 -translate-x-1/2 rounder bg-gray-100 px-2 font-mono text-lg text-gray-500"
          >{{ i }}:00</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
