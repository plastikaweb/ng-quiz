import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { QuizQuestion } from '@quiz/models';
import { SafeHtmlPipe } from '@quiz/pipes';

@Component({
  selector: 'app-question-container',
  standalone: true,
  imports: [NgFor, SafeHtmlPipe, NgClass, NgIf, NgTemplateOutlet],
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionContainerComponent {
  @Input() quizQuestion!: QuizQuestion;
  @Input() readOnly = false;
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
