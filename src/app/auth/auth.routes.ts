import { Route } from '@angular/router';

export const authRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./auth-login/auth-login.component').then((c) => c.AuthLoginComponent),
  },
  {
    path: 'registro',
    loadComponent: () =>
      import('./auth-register/auth-register.component').then((c) => c.AuthRegisterComponent),
  },
];
