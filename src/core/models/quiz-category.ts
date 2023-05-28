export interface QuizCategory {
  readonly id: number;
  readonly name: string;
}

export interface QuizCategoryApiResponse {
  readonly trivia_categories: QuizCategory[];
}
