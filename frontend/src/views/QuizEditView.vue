<script setup lang="ts">
import SlidePreviewList from '@/components/SlidePreviewList.vue';
import SlideEditor from '@/components/SlideEditor.vue';

defineProps<{
  title: String
}>();
</script>

<template>
  <main>
    <h2>Edit: {{ title }}</h2>

    <div>
      <SlidePreviewList :slides="[]" />
      <SlideEditor :slide="undefined" />
    </div>
  </main>
</template>
