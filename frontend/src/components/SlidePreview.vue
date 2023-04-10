<script setup lang="ts">

defineProps<{
  title: string,
  image?: string
}>();

defineEmits<{
  (event: 'click', ev: UIEvent): void
}>();
</script>

<template>
  <slot name="before" />
  <div
    style="border: 1px solid black; padding: 1em"
    @click="$emit('click', $event)"
  >
    <h6>{{ title }}</h6>
    <img
      v-if="image"
      :src="image"
      alt=""
    >
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
</style>
