import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login').then(m => m.Login)
  },

  {
    path: '',
    loadComponent: () =>
      import('./components/layout/layout').then(m => m.Layout),
    canActivate: [AuthGuard],
    children: [
      { path: 'master', loadComponent: () => import('./components/master/master').then(m => m.Master) },
      { path: 'employee', loadComponent: () => import('./components/employee/employee').then(m => m.Employee) },
      { path: 'client', loadComponent: () => import('./components/client/client').then(m => m.ClientComponent) },
      { path: 'client-project', loadComponent: () => import('./components/client-project/client-project').then(m => m.ClientProject) }
    ]
  },
];
