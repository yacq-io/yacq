<script setup lang="ts">
import { computed } from 'vue';
import { TrashIcon, PhotoIcon, DocumentDuplicateIcon } from '@heroicons/vue/24/outline';
import { CheckCircleIcon } from '@heroicons/vue/20/solid';
import type { SlideInfo } from '@/types';
import { SlideType } from '@/types';

const props = defineProps<{
  i: number;
  slide: SlideInfo;
  active: boolean;
  class?: string;
}>();

defineEmits<{
  (event: 'click', ev: UIEvent): void,
  (event: 'delete', ev: UIEvent): void,
  (event: 'duplicate', ev: UIEvent): void
}>();

const rootClasses = computed(() => (props.class ?? '') + (props.active ? ' activeSlide' : ''));

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
    :class="rootClasses"
    class="flex flex-col text-sm w-full"
    @click="$emit('click', $event)"
  >
    <span class="font-semibold ml-5 w-100 mb-1">
      {{ i }} &nbsp;&nbsp; {{ slideType }}
    </span>
    <div class="flex w-full grow">
      <div class="mr-1 mt-1">
        <div class="mb-2">
          <a
            title="Duplicate"
            href="#"
            @click.prevent.stop="$emit('duplicate', $event)"
          >
            <DocumentDuplicateIcon class="w-4" />
          </a>
        </div>
        <div class="mb-2">
          <a
            title="Delete"
            href="#"
            @click.prevent.stop="$emit('delete', $event)"
          >
            <TrashIcon class="w-4" />
          </a>
        </div>
      </div>
      <div
        class="grow bg-gray-100 rounded p-2 mr-3 text-center flex flex-col justify-between
               cursor-pointer border-2 border-gray-100 hover:border-gray-600"
      >
        <h6 class="ellipsis text-sm">
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
            class="grid grid-cols-2 gap-x-3 p-1 -mb-2 min-h-[1em] w-full text-xs"
          >
            <div
              v-for="[index, answer] of slide.answers.entries()"
              :key="index"
              class="flex justify-between w-full items-center pr-1"
            >
              <span class="ellipsis">
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
.activeSlide {
    @apply bg-blue-100;
}
</style>
