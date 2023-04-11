<script setup lang="ts">
import router from '@/router';

function editQuiz(text: string) {
  router.push({ name: 'edit', params: { title: text } });
}
</script>

<template>
  <section>
    <h2>Quiz List</h2>
    <ul>
      <li
        v-for="quiz of ['Quiz 1', 'Quiz 2']"
        :key="quiz"
        @click="editQuiz(quiz)"
      >
        <a
          href="#"
          @click.prevent
        >
          {{ quiz }}
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="postcss" scoped>
h2 {
    @apply mb-2;
}
ul {
    @apply list-none flex flex-col w-full ml-0;

    li {
        @apply w-full bg-green-100 p-3 my-2 border-2 border-green-300 rounded cursor-pointer;
    }
}
</style>
