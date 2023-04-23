<script setup lang="ts">
import type { SlideInfo } from '@/types';
import { SlideType } from '@/types';
import SlideSlideEditor from '@/components/SlideSlideEditor.vue';
import QuestionSlideEditor from '@/components/QuestionSlideEditor.vue';

defineProps<{
  slide: SlideInfo
}>();

defineEmits<{
  (event: 'edit', slide: SlideInfo): void
}>();
</script>

<template>
  <div class="p-3 h-full p-3 bg-center bg-cover bg-[url('https://placehold.co/2560x1440')]">
    <SlideSlideEditor
      v-if="slide.type == SlideType.Slide"
      :slide="slide"
      @edit="$emit('edit', $event)"
    />
    <QuestionSlideEditor
      v-if="slide.type == SlideType.Question"
      :slide="slide"
      @edit="$emit('edit', $event)"
    />
  </div>
</template>

<style lang="postcss" scoped>
</style>
