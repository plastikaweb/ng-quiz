import { InjectionToken } from '@angular/core';

const quizDifficulties = ['easy', 'medium', 'hard'] as const;
export type QuizDifficultyList = typeof quizDifficulties;
export type QuizDifficulty = QuizDifficultyList[number];

export const QUIZ_DIFFICULTY = new InjectionToken<QuizDifficultyList>('quizDifficulty', {
  providedIn: 'root',
  factory: () => quizDifficulties,
});
