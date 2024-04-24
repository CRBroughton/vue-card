<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import type { VNodeRef } from 'vue'
import { ref } from 'vue'

interface Props {
  src: string
  alt: string
  width: string
  height: string
}
defineProps<Props>()
const target = ref<VNodeRef | undefined>(undefined)
const { variants } = useMotion(target, {
  initial: {
    opacity: 0,
    scale: 0.0,
    y: 100,
  },
  enter: {
    opacity: 1,
    scale: 1.0,
    y: 0,
  },
})
</script>

<template>
  <div
    ref="target"
    :initial="variants.initial"
    :enter="variants.enter"
  >
    <div class="card-inner">
      <div class="card-front">
        <img
          :src
          :alt
          :width
          :height
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
	perspective: 1000px;
}

.card-inner {
	display: grid;
	transition: transform 0.8s;
	transform-style: preserve-3d;
}

/* Position the front and back side */
.card-front {
	grid-area: 1/1;
}
</style>
