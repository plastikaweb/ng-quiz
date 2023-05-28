import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizContainerComponent } from '@quiz/components';
import { QUIZ_DIFFICULTY, QuizDifficulty, QuizDifficultyLevels, QuizQuestion, QuizQuestionApiParams } from '@quiz/models';
import { QuizStateService } from '@quiz/services';
import { Subject, takeUntil, tap } from 'rxjs';
import { QuizCategoriesApiService } from './services/quiz-categories-api.service';
import { QuizQuestionsApiService } from './services/quiz-questions-api.service';
import { QuzCategoriesStateService } from './services/quz-categories-state.service';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent implements OnInit, OnDestroy {
  quizQuestions$ = this.quizStateService.quiz$;
  quizCategories$ = this.quizCategoriesStateService.quizCategories$;

  quizForm = new FormGroup<QuizForm>({
    category: new FormControl(null, Validators.required),
    difficulty: new FormControl(null, Validators.required),
    amount: new FormControl(5, { nonNullable: true }),
  });

  protected quizFinished: QuizQuestion[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    @Inject(QUIZ_DIFFICULTY) protected readonly difficultyLevels: QuizDifficultyLevels,
    private readonly quizCategoriesApiService: QuizCategoriesApiService,
    private readonly quizQuestionsApiService: QuizQuestionsApiService,
    private readonly quizStateService: QuizStateService,
    private readonly quizCategoriesStateService: QuzCategoriesStateService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    if (this.quizCategoriesStateService.quizCategoriesState() !== 'done') {
      this.quizCategoriesApiService
        .getList()
        .pipe(
          takeUntil(this.destroy$),
          tap(categories => this.quizCategoriesStateService.saveQuizCategories(categories)),
        )
        .subscribe();
    }

    this.resetQuiz();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(): void {
    if (this.quizForm.valid) {
      this.resetQuiz();

      this.quizQuestionsApiService
        .getList(this.quizForm.value as QuizQuestionApiParams)
        .pipe(
          takeUntil(this.destroy$),
          tap(quiz => this.quizStateService.saveQuiz(quiz, 'init')),
        )
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
    this.quizFinished = [];
    this.quizStateService.saveQuiz(this.quizFinished, 'reset');
  }
}
