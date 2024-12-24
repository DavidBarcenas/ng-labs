import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./lib/home/home.component').then((c) => c.HomeComponent),
  },
];
