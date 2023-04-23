<script setup lang="ts">
import SlidePreview from '@/components/SlidePreview.vue';
import type { SlideInfo } from '@/types';
import type { SlideType } from '@/types';
import AddSlide from '@/components/helpers/AddSlide.vue';

withDefaults(defineProps<{
  slides: SlideInfo[];
  active: number;
}>(), {
  slides: () => [] as SlideInfo[],
});

defineEmits<{
  (event: 'add', type: SlideType, before: number): void;
  (event: 'select', index: number): void;
  (event: 'delete', index: number): void;
  (event: 'duplicate', index: number): void;
}>();
</script>

<template>
  <div>
    <SlidePreview
      v-for="[index, slide] of slides.entries()"
      :key="slide.uuid"
      :i="index+1"
      :slide="slide"
      :active="active == index"
      class="py-3 px-5 min-h-[180px]"
      @click="$emit('select', index)"
      @delete="$emit('delete', index)"
      @duplicate="$emit('duplicate', index)"
    />
    <AddSlide
      :before-index="-1"
      @add="(type, beforeIndex) => $emit('add', type, beforeIndex)"
    />
  </div>
</template>

<style lang="postcss" scoped>
</style>
