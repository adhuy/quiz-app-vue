<script setup lang="ts">
import type { Question } from '../types/quiz'
import { ref } from 'vue'

const props = defineProps<{
  question: Question
}>()

const emit = defineEmits<{
  (e: 'answer', index: number): void
}>()

const selected = ref<number | null>(null)

const selectAnswer = (index: number) => {
  selected.value = index
  emit('answer', index)
}
</script>

<template>
  <div class="bg-amber-100 p-6 rounded-xl border drop-shadow-[4px_4px_0px_#000]">
    <h2 class="text-lg font-semibold mb-4">
      {{ question.question }}
    </h2>

    <div class="space-y-2">
      <button
        v-for="(option, index) in question.options"
        :key="index"
        @click="selectAnswer(index)"
        class="w-full p-3 rounded-lg font-semibold border drop-shadow-[4px_4px_0px_#000] hover:bg-blue-100 cursor-pointer"
        :class="{
          'bg-blue-300': selected === index,
          'bg-gray-50': selected !== index
        }"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>
