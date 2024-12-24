import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'signals',
    loadChildren: () => import('@ng-labs/signals').then((c) => c.routes),
  },
  { path: '', pathMatch: 'full', redirectTo: 'signals' },
];
