import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'signals',
    loadComponent: () => import('@ng-labs/signals').then((c) => c.SignalsComponent),
  },
  { path: '', pathMatch: 'full', redirectTo: 'signals' },
];
