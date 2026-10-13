import { Component, inject } from '@angular/core';
import { ConferenceService } from '../../../services/conference.service';

@Component({
  selector: 'app-statistics',
  template: `
    <h2>Statistiques</h2>
    <p>Nombre de conférences : {{ total }}</p>
  `,
})
export class Statistics {
  total = inject(ConferenceService).getAll().length;
}
