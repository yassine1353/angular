import { Routes } from '@angular/router';
import { AdminLayout } from './admin-layout/admin-layout';
import { Dashboard } from './dashboard/dashboard';
import { Statistics } from './statistics/statistics';
import { Users } from './users/users';

// Préfixe : /admin
export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayout, // contient son propre <router-outlet>
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard, title: 'Tableau de bord' },
      { path: 'statistics', component: Statistics, title: 'Statistiques' },
      { path: 'users', component: Users, title: 'Gestion des utilisateurs' },
    ],
  },
];
