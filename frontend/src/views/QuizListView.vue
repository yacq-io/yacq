<script setup lang="ts">
import router from '@/router';

function editQuiz(e: Event) {
  console.log(e.target);
  if (e.target instanceof HTMLElement) router.push({ name: 'edit', params: { title: e.target.innerText } });
}
</script>

<template>
  <main>
    <h2>Quiz List</h2>
    <ul>
      <li>
        <a
          href="#"
          @click.prevent="editQuiz"
        >Quiz 1</a>
      </li>
      <li>
        <a
          href="#"
          @click.prevent="editQuiz"
        >Quiz 2</a>
      </li>
    </ul>
  </main>
</template>
