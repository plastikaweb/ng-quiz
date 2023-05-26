import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { QuizQuestion } from 'src/app/core/models';
import { RandomOrderPipe } from '../../pipes/random-order.pipe';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

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
  @Output() selectAnswer = new EventEmitter<QuizQuestion>();
  protected result!: string | null;

  onClick(result: string): void {
    this.result = this.result !== result ? result : null;

    this.selectAnswer.emit({
      ...this.quizQuestion,
      result: this.result,
    });
  }
}
