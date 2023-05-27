import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuizContainerComponent } from 'src/app/shared/components/quiz-container/quiz-container.component';
import { QuizStateService } from '../../shared/services/quiz-state.service';
import { ScoreStyleDirective } from '../../shared/directives/score-style.directive';

@Component({
  standalone: true,
  selector: 'app-results',
  imports: [NgFor, NgIf, AsyncPipe, QuizContainerComponent, RouterLink, ScoreStyleDirective],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
  quizQuestions$ = this.quizStateService.quiz$;
  quizScore$ = this.quizStateService.quizScore$;

  constructor(private readonly quizStateService: QuizStateService) {}
}
