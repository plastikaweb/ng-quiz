import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { QuizStateService } from './shared/services/quiz-state.service';

export const routes: Routes = [
  {
    path: 'quiz',
    title: 'Quiz Maker',
    loadComponent: () => import('./features/quiz/quiz.component').then(m => m.QuizComponent),
  },
  {
    path: 'results',
    title: 'Result',
    loadComponent: () => import('./features/results/results.component').then(m => m.ResultsComponent),
    canActivate: [() => inject(QuizStateService).quizState() === 'done' || inject(Router).createUrlTree(['/quiz'])],
  },
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  { path: '**', redirectTo: 'quiz' },
];
