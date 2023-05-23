import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'quiz',
    title: 'Welcome to the Quiz!',
    loadComponent: () => import('./quiz/quiz.component').then(m => m.QuizComponent),
  },
  {
    path: 'results',
    title: 'Your Quiz Results',
    loadComponent: () => import('./results/results.component').then(m => m.ResultsComponent),
  },
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  { path: '**', redirectTo: 'quiz' },
];
