import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizCategory } from 'src/app/core/models';
import { QuizCategoriesState } from '../../../core/models/model-state';

@Injectable({
  providedIn: 'root',
})
export class QuzCategoriesStateService {
  private quizCategoriesSubject = new BehaviorSubject<QuizCategory[]>([]);
  private state: QuizCategoriesState = 'init';
  quizCategories$ = this.quizCategoriesSubject.asObservable();

  quizCategoriesState(): QuizCategoriesState {
    return this.state;
  }

  saveQuizCategories(quizCategories: QuizCategory[]): void {
    this.quizCategoriesSubject.next(quizCategories);
    this.state = 'done';
  }
}
