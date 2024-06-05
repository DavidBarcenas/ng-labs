import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'app', loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes) },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
];
