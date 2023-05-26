import { Injectable } from '@angular/core';
import { QuizQuestion, QuizQuestionApiParams, QuizQuestionApiResponse } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';
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
