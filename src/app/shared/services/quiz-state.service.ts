import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { QuizQuestion } from '../../core/models/quiz-question';
import { RandomOrderPipe } from '../pipes/random-order.pipe';

@Injectable({
  providedIn: 'root',
})
export class QuizStateService {
  private quizSubject = new BehaviorSubject<QuizQuestion[]>([]);
  quiz$ = this.quizSubject.asObservable();
  quizScore$ = this.quiz$.pipe(
    map(quiz => {
      return (
        quiz?.reduce((acc, question) => {
          if (question.correct_answer === question.result) acc++;
          return acc;
        }, 0) || 0
      );
    }),
  );

  constructor(private readonly randomOrderPipe: RandomOrderPipe) {}

  saveQuiz(quiz: QuizQuestion[], randomize = false): void {
    if (randomize) {
      quiz = this.randomizeAnswers(quiz);
    }
    this.quizSubject.next(quiz);
  }

  private randomizeAnswers(quiz: QuizQuestion[]) {
    return quiz?.map(quizQuestion => ({
      ...quizQuestion,
      answers: this.randomOrderPipe.transform(quizQuestion.answers),
    }));
  }
}
