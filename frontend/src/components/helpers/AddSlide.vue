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
  <div class="flex flex-col justify-center font-bold w-full p-2">
    <button
      type="button"
      class="bg-blue-700 hover:bg-blue-600 text-white"
      @click.prevent="$emit('add', SlideType.Question, beforeIndex)"
    >
      Add Question
    </button>
    <button
      type="button"
      class="bg-gray-300 hover:bg-gray-400"
      @click.prevent="$emit('add', SlideType.Slide, beforeIndex)"
    >
      Add Slide
    </button>
  </div>
</template>

<style lang="postcss" scoped>
button {
    @apply w-full p-2 rounded-lg my-2;
}
</style>
