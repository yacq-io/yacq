<script setup lang="ts">
import SlidePreviewList from '@/components/SlidePreviewList.vue';
import SlideEditor from '@/components/SlideEditor.vue';
import { ref } from 'vue';
import type { Optional, SlideInfo } from '@/types';
import { SlideType } from '@/types';

defineProps<{
  title: String
}>();

const slide = ref<Optional<SlideInfo>>(undefined);
const slides = ref<Array<SlideInfo>>([]);

let currentIndex = 0;

function selectSlide(index: number) {
  currentIndex = index;
  slide.value = undefined;
  slide.value = slides.value[index];
}

function addSlide(type: SlideType) {
  switch (type) {
    case SlideType.Slide:
      slides.value.push({
        type,
        title: '',
      });
      break;
    case SlideType.Question:
      slides.value.push({
        type,
        title: '',
        answers: [],
      });
      break;
  }
  selectSlide(slides.value.length - 1);
}

function updateSlide(update: SlideInfo) {
  slides.value[currentIndex] = update;
  selectSlide(currentIndex);
}
</script>

<template>
  <main>
    <h2>Edit: {{ title }}</h2>

    <div>
      <SlidePreviewList
        :slides="slides"
        @add="addSlide"
        @select="selectSlide"
      />
      <SlideEditor
        v-if="slide"
        :slide="slide"
        @edit="updateSlide"
      />
    </div>
  </main>
</template>