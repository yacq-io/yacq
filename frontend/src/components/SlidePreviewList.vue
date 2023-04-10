<script setup lang="ts">
import SlidePreview from '@/components/SlidePreview.vue';
import type { SlideInfo } from '@/types';
import { SlideType } from '@/types';

withDefaults(defineProps<{
  slides: SlideInfo[]
}>(), {
  slides: () => [] as SlideInfo[],
});

defineEmits<{
  (event: 'add', type: SlideType): void,
  (event: 'select', index: number): void
}>();
</script>

<template>
  <div>
    <SlidePreview
      v-for="[index, slide] of slides.entries()"
      :key="index"
      :title="slide.title"
      @click="$emit('select', index)"
    >
      {{ slide.type == SlideType.Slide ? "S" : "Q" }}<br>
      <span v-if="slide.type == SlideType.Question">
        {{ slide.answers.map(a => a.name).join(", ") }}
      </span>
    </SlidePreview>
    <a
      href="#"
      @click.prevent="$emit('add', SlideType.Slide)"
    >Add slide</a>
    <a
      href="#"
      @click.prevent="$emit('add', SlideType.Question)"
    >Add question</a>
  </div>
</template>

<style lang="scss" scoped>
</style>
