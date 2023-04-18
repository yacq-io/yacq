<script setup lang="ts">
import SlidePreview from '@/components/SlidePreview.vue';
import type { SlideInfo } from '@/types';
import type { SlideType } from '@/types';
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
  <div class="mx-2 mt-3">
    <SlidePreview
      v-for="[index, slide] of slides.entries()"
      :key="index"
      :i="index+1"
      :slide="slide"
      class="py-3 min-h-[180px]"
      @click="$emit('select', index)"
    />
    <AddSlide
      :before-index="-1"
      @add="(type, beforeIndex) => $emit('add', type, beforeIndex)"
    />
  </div>
</template>

<style lang="postcss" scoped>
</style>
