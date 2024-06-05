import { Route } from '@angular/router';

export const authRoutes: Route[] = [
  {
    path: 'acceder',
    loadComponent: () =>
      import('./auth-login/auth-login.component').then((c) => c.AuthLoginComponent),
  },
  {
    path: 'registro',
    loadComponent: () =>
      import('./auth-register/auth-register.component').then((c) => c.AuthRegisterComponent),
  },
  {
    path: 'cuenta/:id',
    loadComponent: () => import('./auth-help/auth-help.component').then((c) => c.AuthHelpComponent),
  },
  {
    path: '**', redirectTo: 'acceder'
  }
];
