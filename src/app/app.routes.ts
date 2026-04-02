import { Routes } from '@angular/router';
import { SubjectsComponent } from './pages/subjects/subjects';
import { QuizComponent } from './pages/quiz/quiz';
import { ResultComponent } from './pages/result/result';

export const routes: Routes = [
  { path: '', component: SubjectsComponent },
  { path: 'quiz/:subject', component: QuizComponent },
  { path: 'result', component: ResultComponent }
];