import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'acceder', loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes) },
  { path: '', redirectTo: 'acceder', pathMatch: 'full' },
];
