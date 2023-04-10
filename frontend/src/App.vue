<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <h1 class="font-display">yacq</h1>
    <ul>
      <li>
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/list">
          List
        </router-link>
      </li>
    </ul>
  </header>

  <RouterView />
</template>

<style lang="postcss" scoped>
header {
    @apply w-full inline-flex items-center;
}
</style>
