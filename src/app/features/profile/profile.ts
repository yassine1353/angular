import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <section class="page">
      <h2>Profil utilisateur</h2>
      <p>Votre espace personnel et vos inscriptions.</p>
    </section>
  `,
  styles: `
    .page {
      padding: 24px;
    }
  `,
})
export class Profile {}
