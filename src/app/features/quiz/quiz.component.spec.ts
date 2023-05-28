import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ENVIRONMENT } from '@quiz/core/services';
import { RandomOrderPipe } from '../../../shared/pipes/random-order.pipe';
import { QuizComponent } from './quiz.component';
import { QuizCategoriesApiService } from './services/quiz-categories-api.service';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizComponent, HttpClientTestingModule],
      providers: [
        QuizCategoriesApiService,
        RandomOrderPipe,
        {
          provide: ENVIRONMENT,
          useValue: {
            apiUrl: 'https://api',
          },
        },
      ],
    });
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
