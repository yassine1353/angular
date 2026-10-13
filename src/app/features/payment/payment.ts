import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  template: `
    <section class="page">
      <h2>Paiement en ligne</h2>
      <p>Page de paiement sécurisé.</p>
    </section>
  `,
  styles: `
    .page {
      padding: 24px;
    }
  `,
})
export class Payment {}
