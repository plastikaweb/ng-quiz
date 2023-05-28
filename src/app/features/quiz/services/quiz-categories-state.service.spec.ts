import { TestBed } from '@angular/core/testing';

import { QuizCategoriesStateService } from './quiz-categories-state.service';

describe('QuizCategoriesStateService', () => {
  let service: QuizCategoriesStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizCategoriesStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
