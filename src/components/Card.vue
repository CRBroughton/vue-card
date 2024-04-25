<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'
import { computed, ref } from 'vue'

interface Props {
  src: string
  alt: string
  width: string
  height: string
  perspective?: number
  rotation?: number
  radius?: number
  transformTiming: number
}
const props = defineProps<Props>()
const target = ref<HTMLImageElement | undefined>(undefined)
const {
  elementX,
  elementY,
  isOutside,
  elementHeight,
  elementWidth,
} = useMouseInElement(target)

const cardTransform = computed(() => {
  const MAX_ROTATION = props.rotation ?? 6

  const rotateX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)

  const rotateY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

  return isOutside.value
    ? ''
    : `perspective(${props.perspective ?? elementWidth.value}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
})

const widthClass = computed(() => {
  return `${elementWidth.value}px`
})
const transformClass = computed(() => {
  return `transform ${props.transformTiming}s ease-out`
})
const borderRadius = `${props.radius}px`
</script>

<template>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <div v-if="!props.src">
          <slot>{{ props.alt }}</slot>
        </div>
        <img v-if="props.src" ref="target" :src :alt :width :height>
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --shadow-color: 286deg 36% 56%;
}

.card {
  width: v-bind(widthClass);
  transform: v-bind(cardTransform);
  transition: v-bind(transformClass);
  transform-origin: center;
}

img {
  --shadow-color: 252deg 3% 27%;
  border-radius: v-bind(borderRadius);
  box-shadow: 0.4px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
    1.4px 1.7px 2.5px -0.8px hsl(var(--shadow-color) / 0.36),
    3.4px 4.2px 6.1px -1.7px hsl(var(--shadow-color) / 0.36),
    8.3px 10.2px 14.8px -2.5px hsl(var(--shadow-color) / 0.36);
}
</style>
