<script setup lang="ts">
import SlidePreviewList from '@/components/SlidePreviewList.vue';
import SlideEditor from '@/components/SlideEditor.vue';
import { ref, shallowRef } from 'vue';
import type { Optional, SlideInfo } from '@/types';
import { SlideType } from '@/types';
import { v1 as uuidv1 } from 'uuid';

defineProps<{
  title: String
}>();

const slide = shallowRef<Optional<SlideInfo>>(undefined);
const slides = ref<Array<SlideInfo>>([
  {
    uuid: uuidv1(),
    type: SlideType.Slide,
    title: 'Slide 1',
  },
  {
    uuid: uuidv1(),
    type: SlideType.Slide,
    title: 'Slide 2',
  },
  {
    uuid: uuidv1(),
    type: SlideType.Question,
    title: 'Quiz 1',
    answers: [
      { name: 'A', correct: true },
      { name: 'B', correct: false },
      { name: 'C', correct: false },
      { name: 'D', correct: false },
    ],
  },
]);

let currentIndex = 0;

function selectSlide(index: number) {
  currentIndex = index;
  const selected = slides.value[index];
  // todo make this more beautiful
  const clone: any = {};
  clone.uuid = selected.uuid;
  clone.type = selected.type;
  clone.title = selected.title;
  if (selected.type === SlideType.Question) {
    clone.answers = [];
    selected.answers.forEach((answer) => clone.answers.push({ ...answer }));
  }
  slide.value = clone;
}

function addSlide(type: SlideType, beforeIndex: number) {
  let newSlide: SlideInfo;
  switch (type) {
    case SlideType.Slide:
      newSlide = {
        uuid: uuidv1(),
        type,
        title: '',
      };
      break;
    case SlideType.Question:
      newSlide = {
        uuid: uuidv1(),
        type,
        title: '',
        answers: [
          { name: '', correct: false },
          { name: '', correct: false },
          { name: '', correct: false },
          { name: '', correct: false },
        ],
      };
      break;
  }
  if (beforeIndex < 0) {
    slides.value.push(newSlide);
    selectSlide(slides.value.length - 1);
  } else {
    slides.value.splice(beforeIndex, 0, newSlide);
    selectSlide(beforeIndex);
  }
}

function updateSlide(update: SlideInfo) {
  slides.value[currentIndex] = update;
}
</script>

<template>
  <section>
    <aside class="w-48">
      <SlidePreviewList
        :slides="slides"
        @add="addSlide"
        @select="selectSlide"
      />
    </aside>
    <div class="editor">
      <SlideEditor
        v-if="slide"
        :slide="slide"
        @edit="updateSlide"
      />
    </div>
  </section>
</template>

<style lang="postcss" scoped>
section {
    @apply flex items-start gap-x-5 h-full w-full pt-[56px] absolute top-0 left-0;

    aside {
        @apply max-w-lg min-w-[240px];
    }
    .editor {
        @apply w-full h-full border;
    }
}
</style>
