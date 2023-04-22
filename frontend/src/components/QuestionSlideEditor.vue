<script setup lang="ts">
import type { SlideInfoQuestion } from '@/types';
import { reactive } from 'vue';
import AnswerIcon from '@/components/helpers/AnswerIcon.vue';

const props = defineProps<{
  slide: SlideInfoQuestion
}>();

const emit = defineEmits<{
  (event: 'edit', slide: SlideInfoQuestion): void
}>();

const state = reactive({
  title: props.slide.title,
});

function titleChange(ev: Event) {
  if (ev.target) {
    const update: SlideInfoQuestion = { ...props.slide };
    update.title = (ev.target as HTMLElement).innerText;
    state.title = update.title;
    emit('edit', update);
  }
}

function answerChange(ev: Event, id: number) {
  if (ev.target) {
    const update: SlideInfoQuestion = { ...props.slide };
    update.title = state.title;
    update.answers[id].name = (ev.target as HTMLElement).innerText;
    emit('edit', update);
  }
}

function answerCorrectChange(ev: Event, id: number) {
  if (ev.target) {
    const update: SlideInfoQuestion = { ...props.slide };
    update.title = state.title;
    update.answers[id].correct = (ev.target as HTMLInputElement).checked;
    emit('edit', update);
  }
}
</script>

<template>
  <div class="flex flex-col justify-between h-full">
    <h1
      class="text-center w-full bg-white/90 rounded p-4 outline-none"
      contenteditable="true"
      @input="titleChange"
    >
      {{ slide.title }}
    </h1>
    <ol class="grid grid-cols-2 gap-5 mx-10">
      <li
        v-for="n in 4"
        :key="n-1"
        class="flex justify-between w-full px-8 rounded-lg text-2xl text-white"
      >
        <span class="inline-flex items-center grow">
          <AnswerIcon :index="n" />
          <span
            class="grow w-full py-8 outline-none"
            contenteditable="true"
            @input="answerChange($event, n-1)"
          >
            {{ slide.answers[n-1].name }}
          </span>
        </span>
        <input
          type="checkbox"
          class="mx-3"
          :checked="slide.answers[n-1].correct"
          @input="answerCorrectChange($event, n-1)"
        >
      </li>
    </ol>
  </div>
</template>

<style lang="postcss" scoped>
li:nth-child(1) {
    @apply bg-red-600 hover:bg-red-700;
}
li:nth-child(2) {
    @apply bg-blue-600 hover:bg-blue-700;
}
li:nth-child(3) {
    @apply bg-green-600 hover:bg-green-700;
}
li:nth-child(4) {
    @apply bg-yellow-500 hover:bg-yellow-600;
}
</style>
