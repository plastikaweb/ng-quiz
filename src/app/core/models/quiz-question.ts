import { QuizDifficulty } from './quiz-difficulty';

export interface QuizAnswer {
  readonly answer: string;
  readonly correct?: boolean;
}

export interface QuizQuestion {
  readonly question: string;
  readonly answers: QuizAnswer[];
}

export interface QuizQuestionWithResult extends QuizQuestion {
  result: QuizAnswer | null;
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
