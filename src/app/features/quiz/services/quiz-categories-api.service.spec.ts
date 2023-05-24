import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { QuizCategoriesApiService } from './quiz-categories-api.service';

describe('QuizCategoriesApiService', () => {
  let service: QuizCategoriesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(QuizCategoriesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
