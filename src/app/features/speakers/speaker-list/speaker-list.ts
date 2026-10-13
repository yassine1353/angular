import { Component, computed, inject } from '@angular/core';
import { ConferenceService } from '../../../services/conference.service';

@Component({
  selector: 'app-speaker-list',
  template: `
    <section class="page">
      <h2>Intervenants</h2>
      <ul>
        @for (s of speakers(); track s) {
          <li>{{ s }}</li>
        }
      </ul>
    </section>
  `,
  styles: `
    .page {
      padding: 24px;
    }
  `,
})
export class SpeakerList {
  private service = inject(ConferenceService);
  speakers = computed(() => [...new Set(this.service.getAll().map((c) => c.speaker))]);
}
