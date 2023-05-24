import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { QUIZ_DIFFICULTY, QuizCategory, QuizDifficulty, QuizDifficultyLevels, QuizQuestion, QuizQuestionParams } from 'src/app/core/models';
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
  imports: [ReactiveFormsModule, NgFor, AsyncPipe, JsonPipe],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  categories$!: Observable<QuizCategory[]>;
  quizQuestions$!: Observable<QuizQuestion[]>;

  quizForm = new FormGroup<QuizForm>({
    category: new FormControl(null, Validators.required),
    difficulty: new FormControl(null, Validators.required),
    amount: new FormControl(5, { nonNullable: true }),
  });

  constructor(
    @Inject(QUIZ_DIFFICULTY) protected readonly difficultyLevels: QuizDifficultyLevels,
    private readonly quizCategoriesApiService: QuizCategoriesApiService,
    private readonly quizQuestionsApiService: QuizQuestionsApiService,
  ) {}

  ngOnInit(): void {
    this.quizForm.controls.amount.disable();
    this.categories$ = this.quizCategoriesApiService.getList();
  }

  onSubmit() {
    if (this.quizForm.valid) {
      this.quizQuestions$ = this.quizQuestionsApiService.getList(this.quizForm.value as QuizQuestionParams);
    }
  }
}
