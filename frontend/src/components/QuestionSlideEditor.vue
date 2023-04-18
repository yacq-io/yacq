<script setup lang="ts">
import type { SlideInfoQuestion } from '@/types';
import { unref } from 'vue';

const props = defineProps<{
  slide: SlideInfoQuestion
}>();

const emit = defineEmits<{
  (event: 'edit', slide: SlideInfoQuestion): void
}>();

function titleChange(ev: Event) {
  if (ev.target) {
    const update: SlideInfoQuestion = { ...props.slide };
    update.title = (ev.target as HTMLElement).innerText;
    emit('edit', update);
  }
}

function answerChange(ev: Event, id: number) {
  if (ev.target) {
    const update: SlideInfoQuestion = unref(props.slide);
    update.answers[id].name = (ev.target as HTMLElement).innerText;
    emit('edit', update);
  }
}

function answerCorrectChange(ev: Event, id: number) {
  if (ev.target) {
    const update: SlideInfoQuestion = unref(props.slide);
    update.answers[id].correct = (ev.target as HTMLInputElement).checked;
    emit('edit', update);
  }
}
</script>

<template>
  <div class="flex flex-col justify-between h-full">
    <h2 class="text-center">
      Title:
      <span
        contenteditable="true"
        @input="titleChange"
      >
        {{ slide.title }}
      </span>
    </h2>
    <ol class="grid grid-cols-2 gap-2">
      <li
        v-for="n in 4"
        :key="n-1"
        class="flex justify-between w-full p-4"
      >
        <span
          class="grow"
          contenteditable="true"
          @input="answerChange($event, n-1)"
        >
          {{ slide.answers[n-1].name }}
        </span>
        <input
          type="checkbox"
          class="mx-3"
          :value="slide.answers[n-1].correct"
          @input="answerCorrectChange($event, n-1)"
        >
      </li>
    </ol>
  </div>
</template>

<style lang="postcss" scoped>
li:nth-child(1) {
    @apply bg-red-500;
}
li:nth-child(2) {
    @apply bg-blue-500;
}
li:nth-child(3) {
    @apply bg-green-500;
}
li:nth-child(4) {
    @apply bg-yellow-500;
}
</style>
