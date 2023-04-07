<script setup lang="ts">
defineProps<{
  title: string,
  image?: string
}>();
</script>

<template>
  <div style="border: 1px solid black; padding: 1em">
    <h6>{{ title }}</h6>
    <img
      v-if="image"
      :src="image"
    >
  </div>
</template>

<style lang="scss" scoped>
</style>
