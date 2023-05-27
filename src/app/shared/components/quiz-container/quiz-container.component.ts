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
      this.quizQuestionsWithResult = [];
      this.completed = false;
    }
  }

  protected onSelectAnswer(questionWithResult: QuizQuestion): void {
    this.quizQuestionsWithResult = [
      ...this.quizQuestionsWithResult.filter(question => question.id !== questionWithResult.id),
      ...(questionWithResult.result ? [questionWithResult] : []),
    ];

    this.markCompleted();
  }

  private markCompleted(): void {
    if (this.quizQuestions.length === this.quizQuestionsWithResult.length) {
      console.log(this.quizQuestionsWithResult);
      this.quizCompleted.emit(this.quizQuestionsWithResult);
    }
  }
}
