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
  <div class="p-3 h-[80vh] mr-3">
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
