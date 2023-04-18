<script setup lang="ts">
import { computed } from 'vue';
import { TrashIcon } from '@heroicons/vue/24/outline';
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
    class="flex flex-col"
    @click="$emit('click', $event)"
  >
    <span class="font-semibold ml-5 w-100">
      {{ i }} &nbsp;&nbsp; {{ slideType }}
    </span>
    <div class="flex w-full items-end h-full grow">
      <div class="mr-1 mb-2 h-full">
        <a
          title="Delete"
          href="#"
        >
          <TrashIcon class="w-4 pointer" />
        </a>
      </div>
      <div class="grow bg-gray-100 rounded h-full p-2">
        <h6>{{ slide.title }}</h6>
        <!--        <img-->
        <!--          v-if="'image' in slide"-->
        <!--          :src="slide.image"-->
        <!--          alt=""-->
        <!--        >-->
        <slot />
        <div
          v-if="'answers' in slide"
          class="grid grid-cols-2 gap-1 p-1"
        >
          <span
            v-for="[index, answer] of slide.answers.entries()"
            :key="index"
          >
            {{ answer }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
</style>
