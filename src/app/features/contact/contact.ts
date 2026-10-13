import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="page">
      <h2>Contact</h2>
      <p>Écrivez-nous : contact&#64;conferences.tn</p>
    </section>
  `,
  styles: `
    .page {
      padding: 24px;
    }
  `,
})
export class Contact {}
