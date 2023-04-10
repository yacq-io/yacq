<script setup lang="ts">
import SlidePreview from '@/components/SlidePreview.vue';
import type { SlideInfo } from '@/types';
import { SlideType } from '@/types';
import AddSlide from '@/components/helpers/AddSlide.vue';

withDefaults(defineProps<{
  slides: SlideInfo[]
}>(), {
  slides: () => [] as SlideInfo[],
});

defineEmits<{
  (event: 'add', type: SlideType, before: number): void,
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
      <template #before>
        <AddSlide
          :before-index="index"
          @add="(type, beforeIndex) => $emit('add', type, beforeIndex)"
        />
      </template>
      {{ slide.type == SlideType.Slide ? "S" : "Q" }}<br>
      <span v-if="slide.type == SlideType.Question">
        {{ slide.answers.map(a => a.name).join(", ") }}
      </span>
    </SlidePreview>
    <AddSlide
      :before-index="-1"
      @add="(type, beforeIndex) => $emit('add', type, beforeIndex)"
    />
  </div>
</template>

<style lang="postcss" scoped>
</style>
