import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./domains/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./domains/launcher/launcher.component').then((c) => c.LauncherComponent),
  },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
];
