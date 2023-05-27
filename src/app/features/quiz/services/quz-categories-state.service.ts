import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizCategory } from 'src/app/core/models';

@Injectable({
  providedIn: 'root',
})
export class QuzCategoriesStateService {
  private quizCategoriesSubject = new BehaviorSubject<QuizCategory[]>([]);
  private done = false;
  quizCategories$ = this.quizCategoriesSubject.asObservable();

  quizCategoriesStateIsDone(): boolean {
    return this.done;
  }

  saveQuizCategories(quizCategories: QuizCategory[]): void {
    this.quizCategoriesSubject.next(quizCategories);
    this.done = true;
  }
}
