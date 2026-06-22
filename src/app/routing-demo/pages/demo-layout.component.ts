import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demo-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <main class="demo-page">
      <h1>Lazy router demo</h1>
      <p>This feature and each page component are loaded with dynamic imports.</p>
      <nav class="demo-nav">
        <a routerLink="/guard-demo" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Overview</a>
        <a routerLink="/guard-demo/profile/1" routerLinkActive="active">Resolved profile</a>
        <a routerLink="/guard-demo/edit" routerLinkActive="active">CanDeactivate editor</a>
        <a routerLink="/guard-demo/admin" routerLinkActive="active">Admin</a>
        <a routerLink="/guard-demo/admin/settings" routerLinkActive="active">Admin settings</a>
      </nav>
      <router-outlet />
    </main>
  `,
  styles: [`
    .demo-page { max-width: 900px; margin: 2rem auto; padding: 0 1rem; font-family: Arial, sans-serif; }
    .demo-nav { display: flex; flex-wrap: wrap; gap: .75rem; margin: 1.25rem 0; }
    .demo-nav a { padding: .55rem .8rem; border: 1px solid #bbb; border-radius: 6px; text-decoration: none; }
    .demo-nav a.active { color: white; background: #2457d6; }
  `],
})
export class DemoLayoutComponent {}
