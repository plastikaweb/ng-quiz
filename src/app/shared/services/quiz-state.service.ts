import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map } from 'rxjs';
import { QuizQuestion } from 'src/app/core/models';

@Injectable({
  providedIn: 'root',
})
export class QuizStateService {
  private quizSubject = new BehaviorSubject<QuizQuestion[] | null>(null);
  public quiz$ = this.quizSubject.asObservable().pipe(filter(Boolean), map(this.getPartialQuiz));

  public saveQuiz(quiz: QuizQuestion[]) {
    this.quizSubject.next(quiz);
  }

  private getPartialQuiz(quiz: QuizQuestion[]) {
    return quiz.map(({ question, answers }) => ({
      question,
      answers: answers.map(({ answer }) => ({
        answer,
      })),
    }));
  }
}
