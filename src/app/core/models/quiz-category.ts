export interface QuizCategory {
  id: number;
  name: string;
}

export interface QuizCategoryApiResponse {
  trivia_categories: QuizCategory[];
}
