<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <h1 class="font-display">
        yacq
      </h1>
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
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style lang="postcss" scoped>
header {
    @apply w-full bg-green-600 flex justify-center;

    nav {
        @apply inline-flex items-center;
        @apply w-full max-w-screen-2xl;
    }

    h1 {
        @apply px-4 py-2;
    }

    ul {
        @apply list-none inline-flex h-full items-center;

        li {
            @apply px-6 h-full flex items-center;

            &:hover {
                @apply bg-green-400;
            }
        }
    }
}
</style>
