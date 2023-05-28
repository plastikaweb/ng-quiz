import { Injectable } from '@angular/core';
import { ApiService } from '@quiz/core/services';
import { QuizQuestion, QuizQuestionApiParams, QuizQuestionApiResponse } from '@quiz/models';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class QuizQuestionsApiService extends ApiService<QuizQuestion[], QuizQuestionApiParams> {
  protected endPoint = 'https://opentdb.com/api.php';

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
