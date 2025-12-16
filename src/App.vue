<script setup lang="ts">
import { ref, computed } from 'vue'
import { questions } from './data/questions'
import QuizCard from './components/QuizCard.vue'
import QuizTimer from './components/QuizTimer.vue'
import QuizResult from './components/QuizResult.vue'

const currentIndex = ref(0)
const score = ref(0)
const showResult = ref(false)
const timerDuration = ref(15)
const isDisabled = ref(true)

const currentQuestion = computed(() => questions[currentIndex.value])

const handleAnswer = (index: number) => {
  if (currentQuestion.value && index === currentQuestion.value.correctAnswer) {
    score.value++
  }
  isDisabled.value = false
}

const nextQuestion = () => {
  if (currentIndex.value < questions.length - 1) {
    currentIndex.value++
    timerDuration.value = 15
  } else {
    showResult.value = true
  }
  isDisabled.value = true
}

const handleTimeUp = () => {
  nextQuestion()
}

const restartQuiz = () => {
  currentIndex.value = 0
  score.value = 0
  showResult.value = false
  timerDuration.value = 15
  isDisabled.value = true
}

</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-xl p-6 bg-gray-200 sm:rounded-2xl sm:border sm:drop-shadow-[4px_4px_0px_#000]">

      <QuizResult
        v-if="showResult"
        :score="score"
        :total="questions.length"
        @restart="restartQuiz"
      />

      <div v-else class="space-y-6">
        <QuizTimer
          :key="currentIndex"
          :duration="timerDuration"
          @timeUp="handleTimeUp"
        />

        <p class="text-sm text-gray-500">
          Soal {{ currentIndex + 1 }} / {{ questions.length }}
        </p>

        <QuizCard
          v-if="currentQuestion"
          :key="currentIndex"
          :question="currentQuestion"
          @answer="handleAnswer"
        />

        <button
          @click="nextQuestion"
          class="w-full border text-2xl font-semibold py-2 rounded-lg"
          :class="{
            'bg-gray-500 opacity-50 drop-shadow-[4px_4px_0px_#000] cursor-not-allowed': isDisabled,
            'bg-green-400 hover:bg-green-500 drop-shadow-[4px_4px_0px_#000] cursor-pointer': !isDisabled
          }"
          :disabled="isDisabled"
        >
          Next
        </button>
      </div>

    </div>
  </div>
</template>
