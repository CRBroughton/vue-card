<script setup lang="ts">
import Card from './components/Card.vue'
</script>

<template>
  <div class="container">
    <Card
      src="https://cloud.appwrite.io/v1/cards/cloud?mock=normal"
      alt="The front of the Card"
      width="450"
      height="274"
      :perspective="1000"
      :rotation="25"
      :radius="14"
      :transform-timing="0.15"
    />
    <Card
      src="https://cloud.appwrite.io/v1/cards/cloud?mock=normal"
      alt="The front of the Card"
      width="450"
      height="274"
      :perspective="1000"
      :rotation="25"
      :radius="14"
      :transform-timing="0.15"
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
}
</style>
