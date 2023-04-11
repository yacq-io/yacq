<script setup lang="ts">
</script>

<template>
  <div class="inline-block relative">
    <div class="absolute">
      <slot />
    </div>
    <div class="absolute right-0">
      <slot name="top" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
</style>
