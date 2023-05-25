import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionContainerComponent } from './question-container.component';

describe('QuestionContainerComponent', () => {
  let component: QuestionContainerComponent;
  let fixture: ComponentFixture<QuestionContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuestionContainerComponent],
    });
    fixture = TestBed.createComponent(QuestionContainerComponent);
    component = fixture.componentInstance;
    component.quizQuestion = {
      question: 'question',
      answers: [],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
