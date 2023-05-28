import { Injectable, inject } from '@angular/core';
import { ApiService, ENVIRONMENT } from '@quiz/core/services';
import { QuizQuestion, QuizQuestionApiParams, QuizQuestionApiResponse } from '@quiz/models';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class QuizQuestionsApiService extends ApiService<QuizQuestion[], QuizQuestionApiParams> {
  private environment = inject(ENVIRONMENT);
  protected endPoint = `${this.environment.apiUrl}/api.php`;

  protected override mapListResponse({ results }: QuizQuestionApiResponse): QuizQuestion[] {
    return results.map(({ correct_answer, incorrect_answers, question }) => {
      return {
        id: v4(),
        question,
        correct_answer,
        answers: [correct_answer, ...incorrect_answers],
      } as QuizQuestion;
    });
  }
}
