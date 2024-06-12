import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'app', loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes) },
  { path: 'inicio', loadComponent: () => import('./launcher/launcher.component').then(c => c.LauncherComponent) },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
];
