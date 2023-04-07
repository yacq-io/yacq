<script setup lang="ts">
import SlidePreview from '@/components/SlidePreview.vue';
import type { SlideInfo } from '@/types';

withDefaults(defineProps<{
  slides: SlideInfo[]
}>(), {
  slides: () => [] as SlideInfo[],
});

defineEmits<{ (event: 'add'): void
}>();
</script>

<template>
  <div>
    <SlidePreview
      v-for="[index, slide] of slides.entries()"
      :key="index"
      :title="slide.title"
    />
    <a
      href="#"
      @click.prevent="$emit('add')"
    >Add slide</a>
  </div>
</template>

<style lang="scss" scoped>
</style>
