import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RandomOrderPipe } from '../../../shared/pipes/random-order.pipe';
import { QuizComponent } from './quiz.component';
import { QuizCategoriesApiService } from './services/quiz-categories-api.service';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizComponent, HttpClientTestingModule],
      providers: [QuizCategoriesApiService, RandomOrderPipe],
    });
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
