import { Routes } from '@angular/router';
import { CoursesWithFetchService } from './lib/courses/data-access/courses-with-fetch.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./lib/home/home.component').then((c) => c.HomeComponent),
    providers: [CoursesWithFetchService],
  },
];
