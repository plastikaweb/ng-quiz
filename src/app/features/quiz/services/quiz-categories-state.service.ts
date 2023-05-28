import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizCategoriesState, QuizCategory } from 'src/core/models';

@Injectable({
  providedIn: 'root',
})
export class QuizCategoriesStateService {
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
