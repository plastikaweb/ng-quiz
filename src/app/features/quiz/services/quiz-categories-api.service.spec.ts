import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ENVIRONMENT } from '@quiz/core/services';
import { QuizCategoriesApiService } from './quiz-categories-api.service';

describe('QuizCategoriesApiService', () => {
  let service: QuizCategoriesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ENVIRONMENT,
          useValue: {
            apiUrl: 'https://api',
          },
        },
      ],
    });
    service = TestBed.inject(QuizCategoriesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
