<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps<{
  duration: number
}>()

const emit = defineEmits<{
  (e: 'timeUp'): void
}>()

const timeLeft = ref(props.duration)
let interval: number

onMounted(() => {
  interval = window.setInterval(() => {
    timeLeft.value--

    if (timeLeft.value === 0) {
      emit('timeUp')
      clearInterval(interval)
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})

watch(() => props.duration, (newVal) => {
  timeLeft.value = newVal
})
</script>

<template>
  <div class="text-red-500 text-4xl font-bold text-center">
    ⏱ {{ timeLeft }} detik
  </div>
</template>
