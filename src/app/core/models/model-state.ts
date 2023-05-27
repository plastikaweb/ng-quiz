type ModelState = 'done' | 'init' | 'reset';
export type QuizCategoriesState = Omit<ModelState, 'reset'>;
export type QuizState = ModelState;
