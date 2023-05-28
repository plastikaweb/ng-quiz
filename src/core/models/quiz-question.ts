import { QuizDifficulty } from './quiz-difficulty';

export interface QuizQuestion {
  readonly id: string;
  readonly question: string;
  readonly answers: string[];
  readonly correct_answer: string;
  result?: string | null;
}

export interface QuizQuestionApiResponse {
  results: (Pick<QuizQuestion, 'question'> & {
    category: string;
    type: 'multiple' | 'boolean';
    difficulty: QuizDifficulty;
    correct_answer: string;
    incorrect_answers: string[];
  })[];
}

export interface QuizQuestionApiParams {
  readonly category: number;
  readonly difficulty: QuizDifficulty;
  readonly amount: 5;
}
