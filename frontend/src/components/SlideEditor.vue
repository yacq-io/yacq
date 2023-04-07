<script setup lang="ts">
import type { SlideInfo } from '@/types';
import { SlideType } from '@/types';
import SlideSlideEditor from '@/components/SlideSlideEditor.vue';
import QuestionSlideEditor from '@/components/QuestionSlideEditor.vue';

defineProps<{
  slide: SlideInfo
}>();

defineEmits<{ (event: 'edit'): void
}>();
</script>

<template>
  <div>
    <SlideSlideEditor
      v-if="slide.type == SlideType.Slide"
      :slide="slide"
    />
    <QuestionSlideEditor
      v-if="slide.type == SlideType.Question"
      :slide="slide"
    />
  </div>
</template>

<style lang="scss" scoped>
</style>
