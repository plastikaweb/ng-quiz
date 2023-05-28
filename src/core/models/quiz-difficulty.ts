import { InjectionToken } from '@angular/core';

const quizDifficulties = ['easy', 'medium', 'hard'] as const;
export type QuizDifficultyLevels = typeof quizDifficulties;
export type QuizDifficulty = QuizDifficultyLevels[number];

export const QUIZ_DIFFICULTY = new InjectionToken<QuizDifficultyLevels>('quizDifficulty', {
  providedIn: 'root',
  factory: () => quizDifficulties,
});
