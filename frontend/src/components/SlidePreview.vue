<script setup lang="ts">
import { computed } from 'vue';
import { TrashIcon, PhotoIcon, DocumentDuplicateIcon } from '@heroicons/vue/24/outline';
import { CheckCircleIcon } from '@heroicons/vue/20/solid';
import type { SlideInfo } from '@/types';
import { SlideType } from '@/types';

const props = defineProps<{
  i: number;
  slide: SlideInfo;
  class?: string;
}>();

defineEmits<{
  (event: 'click', ev: UIEvent): void,
  (event: 'delete', ev: UIEvent): void
}>();

const slideType = computed<string>(() => {
  let s = '';
  switch (props.slide.type) {
    case SlideType.Question:
      s = 'Question';
      break;
    case SlideType.Slide:
      s = 'Slide';
  }
  return s;
});
</script>

<template>
  <div
    :class="$props.class"
    class="flex flex-col text-sm"
    @click="$emit('click', $event)"
  >
    <span class="font-semibold ml-5 w-100">
      {{ i }} &nbsp;&nbsp; {{ slideType }}
    </span>
    <div class="flex w-full h-full grow h-1">
      <div class="mr-1 mt-1 h-full">
        <div class="mb-2">
          <a
            title="Duplicate"
            href="#"
          >
            <DocumentDuplicateIcon class="w-4" />
          </a>
        </div>
        <div class="mb-2">
          <a
            title="Delete"
            href="#"
          >
            <TrashIcon class="w-4" />
          </a>
        </div>
      </div>
      <div class="grow bg-gray-100 rounded h-full p-2 text-center flex flex-col justify-between">
        <h6 class="text-ellipsis overflow-hidden">
          {{ slide.title }}
        </h6>
        <div class="flex items-center justify-center">
          <div />
          <div class="border border-dashed border-gray-300 px-3 py-1">
            <PhotoIcon class="w-8" />
          </div>
          <div />
        </div>
        <div>
          <div
            v-if="'answers' in slide"
            class="grid grid-cols-2 gap-x-3 p-1 min-h-[1em] w-full text-xs"
          >
            <div
              v-for="[index, answer] of slide.answers.entries()"
              :key="index"
              class="flex justify-between w-full items-center pr-1"
            >
              <span class="overflow-hidden text-ellipsis">
                {{ answer.name }}
              </span>
              <div class="w-3">
                <CheckCircleIcon
                  v-if="answer.correct"
                  class="w-3 text-green-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
</style>
