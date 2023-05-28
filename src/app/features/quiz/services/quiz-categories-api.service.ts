import { Injectable, inject } from '@angular/core';
import { ApiService, ENVIRONMENT } from '@quiz/core/services';
import { QuizCategory, QuizCategoryApiResponse } from '@quiz/models';

@Injectable({
  providedIn: 'root',
})
export class QuizCategoriesApiService extends ApiService<QuizCategory[]> {
  private environment = inject(ENVIRONMENT);
  protected endPoint = `${this.environment.apiUrl}/api_category.php`;

  protected override mapListResponse(response: QuizCategoryApiResponse): QuizCategory[] {
    return response.trivia_categories;
  }
}
