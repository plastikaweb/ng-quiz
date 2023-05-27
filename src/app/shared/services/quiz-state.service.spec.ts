import { TestBed } from '@angular/core/testing';

import { RandomOrderPipe } from '../pipes/random-order.pipe';
import { QuizStateService } from './quiz-state.service';

describe('QuizStateService', () => {
  let service: QuizStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomOrderPipe],
    });
    service = TestBed.inject(QuizStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
