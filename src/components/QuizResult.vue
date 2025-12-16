<script setup lang="ts">
const props = defineProps<{
  score: number
  total: number
}>()

const emit = defineEmits<{
  (e: 'restart'): void
}>()
</script>

<template>
  <div class="text-center space-y-4">
    <h2 class="text-2xl font-bold">🎉 Quiz Selesai</h2>
    <p class="text-lg">
      Skor: {{ score }} / {{ total }}
    </p>

    <button
      @click="emit('restart')"
      class="px-6 py-2 font-semibold bg-blue-300 hover:bg-blue-400 drop-shadow-[4px_4px_0px_#000] border rounded-lg cursor-pointer"
    >
      Ulangi Quiz
    </button>
  </div>
</template>
