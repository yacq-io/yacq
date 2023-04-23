<script setup lang="ts">
import type { SlideInfoSlide } from '@/types';

const props = defineProps<{
  slide: SlideInfoSlide
}>();

const emit = defineEmits<{
  (event: 'edit', slide: SlideInfoSlide): void
}>();

function titleChange(ev: Event) {
  if (ev.target) {
    const update: SlideInfoSlide = { ...props.slide };
    update.title = (ev.target as HTMLElement).innerText;
    emit('edit', update);
  }
}
</script>

<template>
  <div class="flex flex-col justify-between h-full">
    <h1
      class="text-center w-full bg-white/90 rounded p-4 outline-none"
      contenteditable="true"
      @input="titleChange"
    >
      {{ slide.title }}
    </h1>
  </div>
</template>

<style lang="postcss" scoped>
</style>
