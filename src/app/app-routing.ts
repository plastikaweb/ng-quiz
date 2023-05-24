import { Routes } from '@angular/router';

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
  },
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  { path: '**', redirectTo: 'quiz' },
];
