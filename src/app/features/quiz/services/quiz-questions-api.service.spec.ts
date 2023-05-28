import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ENVIRONMENT } from '@quiz/core/services';
import { QuizQuestionsApiService } from './quiz-questions-api.service';

describe('QuizQuestionsApiService', () => {
  let service: QuizQuestionsApiService;

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
    service = TestBed.inject(QuizQuestionsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
