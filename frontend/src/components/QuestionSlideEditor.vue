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
  <div>
    <h2>
      Title:
      <span
        contenteditable="true"
        @input="titleChange"
      >
        {{ slide.title }}
      </span>
    </h2>
    <h5>Answers</h5>
    <ol>
      <li
        v-for="n in 4"
        :key="n-1"
      >
        <span
          contenteditable="true"
          @input="answerChange($event, n-1)"
        >
          {{ slide.answers[n-1].name }}
        </span>
        <input
          type="checkbox"
          :value="slide.answers[n-1].correct"
          @input="answerCorrectChange($event, n-1)"
        >
      </li>
    </ol>
  </div>
</template>

<style lang="postcss" scoped>
</style>
