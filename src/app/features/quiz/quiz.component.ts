import { AsyncPipe, NgFor } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { QUIZ_DIFFICULTY, QuizCategory, QuizDifficulty, QuizDifficultyList } from 'src/app/core/models';
import { QuizCategoriesApiService } from './services/quiz-categories-api.service';

interface QuizForm {
  category: FormControl<number | null>;
  difficulty: FormControl<QuizDifficulty | null>;
}

@Component({
  standalone: true,
  selector: 'app-quiz',
  imports: [ReactiveFormsModule, NgFor, AsyncPipe],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  categories$!: Observable<QuizCategory[]>;

  quizForm = new FormGroup<QuizForm>({
    category: new FormControl(null, Validators.required),
    difficulty: new FormControl(null, Validators.required),
  });

  constructor(
    @Inject(QUIZ_DIFFICULTY) protected readonly difficultyLevels: QuizDifficultyList,
    private readonly quizCategoriesApiService: QuizCategoriesApiService,
  ) {}

  ngOnInit(): void {
    this.categories$ = this.quizCategoriesApiService.getList();
  }
  onSubmit() {
    if (this.quizForm.valid) {
      console.log(this.quizForm.value);
    }
  }
}
