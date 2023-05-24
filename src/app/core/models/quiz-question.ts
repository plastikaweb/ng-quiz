import { QuizDifficulty } from './quiz-difficulty';

interface QuizAnswer {
  answer: string;
  correct: boolean;
}

export interface QuizQuestion {
  category: string;
  type: 'multiple' | 'boolean';
  question: string;
  answers: QuizAnswer[];
}

export interface QuizQuestionApiResponse {
  results: Pick<QuizQuestion, 'category' | 'type' | 'question'> &
    {
      correct_answer: string;
      incorrect_answers: string[];
    }[];
}

export interface QuizQuestionParams {
  category: number;
  difficulty: QuizDifficulty;
  amount: 5;
}
