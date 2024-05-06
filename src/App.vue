<script setup lang="ts">
import Card from './components/Card.vue'
</script>

<template>
  <div class="container">
    <Card
      src="https://placehold.co/600x600"
      alt="The front of the Card"
      width="600"
      height="600"
    />
    <Card
      src="https://placehold.co/600x500"
      alt="The front of the Card"
      width="600"
      height="500"
    />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.container {
  display: flex;
  gap: 1em;
  width: 100%
}
</style>
