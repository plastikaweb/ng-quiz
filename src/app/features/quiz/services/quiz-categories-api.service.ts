import { Injectable } from '@angular/core';
import { ApiService } from '@quiz/core/services';
import { QuizCategory, QuizCategoryApiResponse } from '@quiz/models';

@Injectable({
  providedIn: 'root',
})
export class QuizCategoriesApiService extends ApiService<QuizCategory[]> {
  protected endPoint = 'https://opentdb.com/api_category.php';

  protected override mapListResponse(response: QuizCategoryApiResponse): QuizCategory[] {
    return response.trivia_categories;
  }
}
