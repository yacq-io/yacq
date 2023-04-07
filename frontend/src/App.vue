<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <h1>yacq</h1>
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

<style scoped>
</style>
