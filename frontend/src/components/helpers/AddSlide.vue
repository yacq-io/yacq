<script setup lang="ts">
import { SlideType } from '@/types';

defineProps<{
  beforeIndex: number
}>();

defineEmits<{
  (event: 'add', type: SlideType, beforeIndex: number): void
}>();
</script>

<template>
  <div>
    <a
      href="#"
      @click.prevent="$emit('add', SlideType.Slide, beforeIndex)"
    >
      Add slide
    </a> |
    <a
      href="#"
      @click.prevent="$emit('add', SlideType.Question, beforeIndex)"
    >
      Add question
    </a>
  </div>
</template>

<style lang="scss" scoped>
</style>
