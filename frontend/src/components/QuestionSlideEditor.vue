<script setup lang="ts">
import type { SlideInfoQuestion } from '@/types';

defineProps<{
  slide: SlideInfoQuestion
}>();

defineEmits<{
  (event: 'edit', slide: SlideInfoQuestion): void
}>();
</script>

<template>
  <div />
</template>

<style lang="scss" scoped>
</style>