<script setup lang="ts">
import SlidePreview from '@/components/SlidePreview.vue';
import type {SlideInfo} from '@/types';

const props = defineProps({
    slides: {
        type: Array<SlideInfo>,
        default: []
    }
});

const emit = defineEmits<{
    (event: 'add'): void
}>();
</script>

<template>
    <div>
        <SlidePreview v-for="slide of slides" :key="slide" :title="slide"/>
        <a href="#" @click.prevent="$emit('add')">Add slide</a>
    </div>
</template>

<style lang="scss" scoped>
</style>
