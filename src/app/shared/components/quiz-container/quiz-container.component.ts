import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { QuizQuestion } from 'src/app/core/models';
import { QuestionContainerComponent } from '../question-container/question-container.component';

@Component({
  selector: 'app-quiz-container',
  standalone: true,
  imports: [QuestionContainerComponent, NgFor, NgIf],
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizContainerComponent implements OnChanges {
  @Input() quizQuestions!: QuizQuestion[];
  @Input() readOnly = false;
  @Output() quizCompleted = new EventEmitter<QuizQuestion[]>();
  protected completed = false;
  private quizQuestionsWithResult: QuizQuestion[] = [];

  ngOnChanges({ quizQuestions }: SimpleChanges): void {
    if (quizQuestions) {
      this.quizQuestionsWithResult = [...quizQuestions.currentValue];
      this.completed = false;
    }
  }

  protected onSelectAnswer(questionWithResult: QuizQuestion): void {
    this.quizQuestionsWithResult = this.quizQuestionsWithResult.map(question => {
      if (question.id === questionWithResult.id) {
        return { ...question, result: questionWithResult.result };
      }
      return question;
    });

    this.markCompleted();
  }

  private markCompleted(): void {
    this.quizCompleted.emit(this.quizQuestionsWithResult.every(question => question.result) ? this.quizQuestionsWithResult : []);
  }
}
