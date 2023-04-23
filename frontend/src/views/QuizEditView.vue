<script setup lang="ts">
import SlidePreviewList from '@/components/SlidePreviewList.vue';
import SlideEditor from '@/components/SlideEditor.vue';
import { reactive, ref, shallowRef } from 'vue';
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

const state = reactive({
  currentIndex: 0,
});

function cloneSlideInfo(selected: SlideInfo): SlideInfo {
  // todo make this more beautiful
  const clone: any = {};
  clone.uuid = selected.uuid;
  clone.type = selected.type;
  clone.title = selected.title;
  if (selected.type === SlideType.Question) {
    clone.answers = [];
    selected.answers.forEach((answer) => clone.answers.push({ ...answer }));
  }
  return clone;
}

function selectSlide(index: number) {
  state.currentIndex = index;
  const selected = slides.value[state.currentIndex];
  slide.value = cloneSlideInfo(selected);
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
  slides.value[state.currentIndex] = update;
}

function duplicateSlide(index: number) {
  // todo there is still a bug here: when duplicating and then editing a slide, switching to the
  //  original slide will not update the visible contents in the SlideEditor
  if (index < slides.value.length) {
    const selection = slides.value[index];
    const duplicate = cloneSlideInfo(selection);
    duplicate.uuid = uuidv1();
    slides.value.splice(index + 1, 0, duplicate);
    selectSlide(index + 1);
  }
}

function deleteSlide(index: number) {
  if (index < slides.value.length) slides.value.splice(index, 1);
}
</script>

<template>
  <section>
    <div class="aside w-80">
      <SlidePreviewList
        :slides="slides"
        :active="state.currentIndex"
        @add="addSlide"
        @select="selectSlide"
        @duplicate="duplicateSlide"
        @delete="deleteSlide"
      />
    </div>
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
    @apply flex items-start h-full w-full pt-[56px] absolute top-0 left-0;

    .aside {
        @apply max-w-lg min-w-[240px];
    }
    .editor {
        @apply w-full h-full;
    }
}
</style>
