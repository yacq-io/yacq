<script setup lang="ts">
import type { SlideInfoSlide } from '@/types';

defineProps<{
  slide: SlideInfoSlide
}>();

defineEmits<{ (event: 'edit'): void
}>();
</script>

<template>
  <div>
    <h2 contenteditable="true">
      {{ slide.title }}
    </h2>
  </div>
</template>

<style lang="scss" scoped>
</style>
