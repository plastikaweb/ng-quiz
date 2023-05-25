import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
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
})
export class QuizComponent implements OnInit {
  categories$!: Observable<QuizCategory[]>;
  quizQuestions$!: Observable<QuizQuestion[] | null>;

  quizForm = new FormGroup<QuizForm>({
    category: new FormControl(null, Validators.required),
    difficulty: new FormControl(null, Validators.required),
    amount: new FormControl(5, { nonNullable: true }),
  });

  constructor(
    @Inject(QUIZ_DIFFICULTY) protected readonly difficultyLevels: QuizDifficultyLevels,
    private readonly quizCategoriesApiService: QuizCategoriesApiService,
    private readonly quizQuestionsApiService: QuizQuestionsApiService,
    private readonly quizStateService: QuizStateService,
  ) {}

  ngOnInit(): void {
    this.categories$ = this.quizCategoriesApiService.getList();
  }

  onSubmit() {
    if (this.quizForm.valid) {
      this.quizQuestions$ = this.quizQuestionsApiService.getList(this.quizForm.value as QuizQuestionApiParams).pipe(
        tap(questions => this.quizStateService.saveQuiz(questions)),
        switchMap(() => this.quizStateService.quiz$),
      );
    }
  }
}
