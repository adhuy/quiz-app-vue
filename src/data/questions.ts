import type { Question } from '../types/quiz'

export const questions: Question[] = [
  {
    id: 1,
    question: 'Apa itu Vue.js?',
    options: [
      'Framework backend',
      'Framework frontend',
      'Database',
      'Bahasa pemrograman'
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: 'Composition API diperkenalkan di Vue versi?',
    options: ['Vue 1', 'Vue 2', 'Vue 3', 'Vue 4'],
    correctAnswer: 2
  }
]
