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
  <div>
    <h2>
      Title:
      <span
        contenteditable="true"
        @input="titleChange"
      >
        {{ slide.title }}
      </span>
    </h2>
  </div>
</template>

<style lang="postcss" scoped>
</style>
