import { Routes } from '@angular/router';
import { SpeakerList } from './speaker-list/speaker-list';

// Préfixe : /speakers
export const SPEAKER_ROUTES: Routes = [
  { path: '', component: SpeakerList, title: 'Intervenants' },
];
