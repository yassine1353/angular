import { Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ConferenceService } from '../../../services/conference.service';

@Component({
  selector: 'app-registration',
  imports: [FormsModule, RouterLink],
  template: `
    <section class="page">
      <h2>Inscription</h2>

      @if (conference(); as c) {
        <p>Conférence : <strong>{{ c.title }}</strong></p>

        <form (ngSubmit)="onSubmit()">
          <label>
            Nom complet
            <input name="name" [ngModel]="name()" (ngModelChange)="name.set($event)" required />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              [ngModel]="email()"
              (ngModelChange)="email.set($event)"
              required
            />
          </label>
          <button type="submit" [disabled]="!name() || !email()">Valider l'inscription</button>
        </form>
      } @else {
        <p>Conférence introuvable.</p>
      }

      <p><a routerLink="/conferences">← Retour à la liste</a></p>
    </section>
  `,
  styles: `
    .page {
      padding: 24px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 360px;
    }
    label {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    button {
      padding: 8px;
      background: #dd0031;
      color: #fff;
      border: 0;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,
})
export class Registration {
  id = input.required<string>();

  private service = inject(ConferenceService);
  private router = inject(Router);

  conference = computed(() => this.service.getById(Number(this.id())));

  name = signal('');
  email = signal('');

  onSubmit() {
    // ... traitement métier de l'inscription (appel API, etc.)
    // Navigation programmée : redirection automatique vers la page de confirmation
    this.router.navigate(['/conferences', this.id(), 'confirmation']);
  }
}
