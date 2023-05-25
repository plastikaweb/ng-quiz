import { Injectable } from '@angular/core';
import { QuizQuestion, QuizQuestionApiParams, QuizQuestionApiResponse } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class QuizQuestionsApiService extends ApiService<QuizQuestion[], QuizQuestionApiParams> {
  protected endPoint = 'https://opentdb.com/api.php';

  protected override mapListResponse({ results }: QuizQuestionApiResponse): QuizQuestion[] {
    return results.map(({ correct_answer, incorrect_answers, question }) => {
      return {
        question,
        answers: [{ answer: correct_answer, correct: true }, ...incorrect_answers.map(answer => ({ answer, correct: false }))],
      } as QuizQuestion;
    });
  }
}
