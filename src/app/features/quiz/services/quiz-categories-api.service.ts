import { Injectable } from '@angular/core';
import { QuizCategory, QuizCategoryApiResponse } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class QuizCategoriesApiService extends ApiService<QuizCategory[]> {
  protected endPoint = 'https://opentdb.com/api_category.php';

  protected override mapListResponse(response: QuizCategoryApiResponse): QuizCategory[] {
    return response.trivia_categories;
  }
}
