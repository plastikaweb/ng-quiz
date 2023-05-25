import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { QuizAnswer, QuizQuestion, QuizQuestionWithResult } from 'src/app/core/models';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';
import { RandomOrderPipe } from '../../pipes/random-order.pipe';

@Component({
  selector: 'app-question-container',
  standalone: true,
  imports: [NgFor, SafeHtmlPipe, NgClass, RandomOrderPipe],
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionContainerComponent {
  @Input() quizQuestion!: QuizQuestion;
  @Output() sendAnswer = new EventEmitter<QuizQuestionWithResult>();
  protected result!: QuizAnswer | null;

  onClick(answer: QuizAnswer) {
    this.result = this.result !== answer ? answer : null;
    this.sendAnswer.emit({
      ...this.quizQuestion,
      result: this.result,
    });
  }
}
