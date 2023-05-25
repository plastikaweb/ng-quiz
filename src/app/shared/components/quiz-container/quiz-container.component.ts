import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QuizAnswer, QuizQuestion, QuizQuestionWithResult } from 'src/app/core/models';
import { QuestionContainerComponent } from '../question-container/question-container.component';

@Component({
  selector: 'app-quiz-container',
  standalone: true,
  imports: [QuestionContainerComponent, NgFor],
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizContainerComponent {
  @Input() quizQuestions!: QuizQuestion[];

  protected onSelectAnswer(answer: QuizQuestionWithResult) {
    console.log(answer);
  }
}
