<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'
import type { VNodeRef } from 'vue'
import { computed, ref } from 'vue'

interface Props {
  src: string
  alt: string
  width: string
  height: string
  perspective: number
  transformTiming: number
}
const props = defineProps<Props>()
const target = ref<VNodeRef | undefined>(undefined)
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

const cardTransform = computed(() => {
  const MAX_ROTATION = 6

  const rotateX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)

  const rotateY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

  return isOutside.value ? '' : `perspective(${props.perspective ?? elementWidth.value}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
})
</script>

<template>
  <div ref="target" class="card">
    <div class="card-inner">
      <div class="card-front">
        <img :src :alt :width :height>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transform: v-bind(cardTransform);
  transition: 'transform v-bind(transformTiming)s ease-out';
}
</style>
