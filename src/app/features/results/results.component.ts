import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuizContainerComponent } from '@quiz/components';
import { ScoreStyleDirective } from '@quiz/directives';
import { QuizStateService } from '@quiz/services';

@Component({
  standalone: true,
  selector: 'app-results',
  imports: [NgFor, NgIf, AsyncPipe, QuizContainerComponent, RouterLink, ScoreStyleDirective],
  templateUrl: './results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
  quizQuestions$ = this.quizStateService.quiz$;
  quizScore$ = this.quizStateService.quizScore$;

  constructor(private readonly quizStateService: QuizStateService) {}
}
