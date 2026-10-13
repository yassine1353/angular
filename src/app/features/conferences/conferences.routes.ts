import { Routes } from '@angular/router';
import { ConferanceList } from './conferance-list/conferance-list';
import { ConferenceDetail } from './conference-detail/conference-detail';
import { Registration } from './registration/registration';
import { Confirmation } from './confirmation/confirmation';

// Préfixe : /conferences
export const CONFERENCE_ROUTES: Routes = [
  { path: '', component: ConferanceList, title: 'Conférences' },
  { path: ':id', component: ConferenceDetail, title: 'Détail de la conférence' },
  { path: ':id/registration', component: Registration, title: 'Inscription' },
  { path: ':id/confirmation', component: Confirmation, title: 'Confirmation' },
];
