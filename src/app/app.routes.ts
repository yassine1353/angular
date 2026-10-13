import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  // Chargé dès le démarrage (page d'entrée)
  { path: 'home', component: Home, title: 'Accueil' },

  // Fonctionnalités à plusieurs pages -> loadChildren (child routes)
  {
    path: 'conferences',
    loadChildren: () =>
      import('./features/conferences/conferences.routes').then((m) => m.CONFERENCE_ROUTES),
  },
  {
    path: 'speakers',
    loadChildren: () =>
      import('./features/speakers/speakers.routes').then((m) => m.SPEAKER_ROUTES),
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },

  // Fonctionnalités à page unique -> loadComponent
  {
    path: 'contact',
    title: 'Contact',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'profile',
    title: 'Profil',
    loadComponent: () => import('./features/profile/profile').then((m) => m.Profile),
  },
  {
    path: 'payment',
    title: 'Paiement en ligne',
    loadComponent: () => import('./features/payment/payment').then((m) => m.Payment),
  },

  // Compatibilité avec l'ancienne URL /list
  { path: 'list', redirectTo: 'conferences', pathMatch: 'full' },

  // Aucune URL saisie
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // URL inexistante
  { path: '**', redirectTo: 'home' },
];
