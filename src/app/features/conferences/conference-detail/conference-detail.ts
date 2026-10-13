import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConferenceService } from '../../../services/conference.service';

@Component({
  selector: 'app-conference-detail',
  imports: [RouterLink],
  template: `
    <section class="page">
      @if (conference(); as c) {
        <h2>{{ c.title }}</h2>
        <p><strong>Intervenant :</strong> {{ c.speaker }}</p>
        <p><strong>Date :</strong> {{ c.date }}</p>
        <p><strong>Lieu :</strong> {{ c.location }}</p>
        <p><strong>Prix :</strong> {{ c.price }} TND</p>
        <p>{{ c.description }}</p>
        <a [routerLink]="['/conferences', c.id, 'registration']">S'inscrire</a>
      } @else {
        <p>Conférence introuvable (id : {{ id() }}).</p>
      }
      <p><a routerLink="/conferences">← Retour à la liste</a></p>
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
export class ConferenceDetail {
  // Reçu automatiquement depuis /conferences/:id grâce à withComponentInputBinding()
  id = input.required<string>();

  private service = inject(ConferenceService);

  // Recalculé automatiquement quand l'id change : aucun subscribe()
  conference = computed(() => this.service.getById(Number(this.id())));
}
