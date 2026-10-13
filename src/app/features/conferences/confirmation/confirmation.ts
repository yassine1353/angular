import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConferenceService } from '../../../services/conference.service';

@Component({
  selector: 'app-confirmation',
  imports: [RouterLink],
  template: `
    <section class="page">
      <h2>Inscription confirmée ✅</h2>
      @if (conference(); as c) {
        <p>
          Votre inscription à <strong>{{ c.title }}</strong> a bien été enregistrée.
        </p>
        <p>Rendez-vous le {{ c.date }} - {{ c.location }}.</p>
      }
      <a routerLink="/conferences">Retour aux conférences</a>
      ·
      <a routerLink="/payment">Procéder au paiement</a>
    </section>
  `,
  styles: `
    .page {
      padding: 24px;
    }
    a {
      color: #dd0031;
      text-decoration: none;
      font-weight: 600;
    }
  `,
})
export class Confirmation {
  id = input.required<string>();

  private service = inject(ConferenceService);
  conference = computed(() => this.service.getById(Number(this.id())));
}
