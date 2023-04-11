<script setup lang="ts">
import { SlideType } from '@/types';
import { DocumentPlusIcon, Bars4Icon, PlusCircleIcon } from '@heroicons/vue/24/outline';
import IconStack from '@/components/helpers/IconStack.vue';

defineProps<{
  beforeIndex: number
}>();

defineEmits<{
  (event: 'add', type: SlideType, beforeIndex: number): void
}>();
</script>

<template>
  <div class="inline-flex justify-center">
    <a
      href="#"
      title="Add slide"
      @click.prevent="$emit('add', SlideType.Slide, beforeIndex)"
    >
      <DocumentPlusIcon class="h-8 w-8" />
    </a>
    <a
      href="#"
      title="Add question"
      @click.prevent="$emit('add', SlideType.Question, beforeIndex)"
    >
      <IconStack class="h-8 w-8">
        <Bars4Icon class="h-8 w-8" />
        <template #top>
          <PlusCircleIcon class="h-4 w-4 bg-white" />
        </template>
      </IconStack>
    </a>
  </div>
</template>

<style lang="postcss" scoped>
</style>
