import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <section class="admin">
      <aside>
        <h3>Administration</h3>
        <a routerLink="dashboard" routerLinkActive="active">Tableau de bord</a>
        <a routerLink="statistics" routerLinkActive="active">Statistiques</a>
        <a routerLink="users" routerLinkActive="active">Utilisateurs</a>
      </aside>
      <main>
        <router-outlet />
      </main>
    </section>
  `,
  styles: `
    .admin {
      display: flex;
      min-height: 60vh;
    }
    aside {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 220px;
      padding: 16px;
      background: #f2f4f9;
    }
    aside a {
      color: #1f2a44;
      text-decoration: none;
      padding: 6px 8px;
      border-radius: 4px;
    }
    aside a.active {
      background: #dd0031;
      color: #fff;
    }
    main {
      flex: 1;
      padding: 24px;
    }
  `,
})
export class AdminLayout {}
