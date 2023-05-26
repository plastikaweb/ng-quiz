import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizQuestion } from 'src/app/core/models';

@Injectable({
  providedIn: 'root',
})
export class QuizStateService {
  private quizSubject = new BehaviorSubject<QuizQuestion[] | null>(null);
  quiz$ = this.quizSubject.asObservable();

  saveQuiz(quiz: (QuizQuestion | QuizQuestion)[]): void {
    this.quizSubject.next(quiz);
  }
}
