<script setup lang="ts">
import { PlayIcon, StopIcon } from '@heroicons/vue/24/solid';

defineProps<{
  index: number;
}>();
</script>

<template>
  <StopIcon
    v-if="index == 1"
    class="w-10"
  />
  <StopIcon
    v-else-if="index == 2"
    class="w-10 rotate-45"
  />
  <PlayIcon
    v-else-if="index == 3"
    class="w-10 rotate-90"
  />
  <PlayIcon
    v-else-if="index == 4"
    class="w-10 -rotate-90"
  />
</template>

<style lang="postcss" scoped>
svg {
    @apply inline mr-5;
}
</style>
