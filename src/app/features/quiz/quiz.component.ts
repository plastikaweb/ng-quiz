import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, tap } from 'rxjs';
import {
  QUIZ_DIFFICULTY,
  QuizCategory,
  QuizDifficulty,
  QuizDifficultyLevels,
  QuizQuestion,
  QuizQuestionApiParams,
} from 'src/app/core/models';
import { QuizContainerComponent } from 'src/app/shared/components/quiz-container/quiz-container.component';
import { QuizStateService } from '../../shared/services/quiz-state.service';
import { QuizCategoriesApiService } from './services/quiz-categories-api.service';
import { QuizQuestionsApiService } from './services/quiz-questions-api.service';

interface QuizForm {
  category: FormControl<number | null>;
  difficulty: FormControl<QuizDifficulty | null>;
  amount: FormControl<5>;
}

@Component({
  standalone: true,
  selector: 'app-quiz',
  imports: [ReactiveFormsModule, NgFor, NgIf, AsyncPipe, QuizContainerComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent implements OnInit, OnDestroy {
  categories$!: Observable<QuizCategory[]>;
  quizQuestions$: Observable<QuizQuestion[] | null> = this.quizStateService.quiz$;
  quizSubscription!: Subscription;
  quizForm = new FormGroup<QuizForm>({
    category: new FormControl(null, Validators.required),
    difficulty: new FormControl(null, Validators.required),
    amount: new FormControl(5, { nonNullable: true }),
  });
  protected quizFinished: QuizQuestion[] = [];

  constructor(
    @Inject(QUIZ_DIFFICULTY) protected readonly difficultyLevels: QuizDifficultyLevels,
    private readonly quizCategoriesApiService: QuizCategoriesApiService,
    private readonly quizQuestionsApiService: QuizQuestionsApiService,
    private readonly quizStateService: QuizStateService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.categories$ = this.quizCategoriesApiService.getList();
    this.resetQuiz();
  }

  ngOnDestroy(): void {
    this.quizSubscription?.unsubscribe();
  }

  onSubmit(): void {
    if (this.quizForm.valid) {
      this.resetQuiz();

      this.quizSubscription = this.quizQuestionsApiService
        .getList(this.quizForm.value as QuizQuestionApiParams)
        .pipe(tap(quiz => this.quizStateService.saveQuiz(quiz, 'init')))
        .subscribe();
    }
  }

  onQuizCompleted(quiz: QuizQuestion[]): void {
    this.quizFinished = quiz;
  }

  sendResults() {
    this.quizStateService.saveQuiz(this.quizFinished, 'done');
    this.router.navigateByUrl('/results');
  }

  private resetQuiz() {
    this.quizStateService.saveQuiz([], 'reset');
  }
}
