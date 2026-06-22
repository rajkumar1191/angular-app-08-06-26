import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthDemoService } from './auth-demo.service';

@Component({
  selector: 'app-guard-control',
  imports: [RouterLink],
  template: `
    <main class="demo-page">
      <h1>Router guard control panel</h1>
      <p>
        Change these values, then try the protected lazy-loaded routes.
      </p>

      @if (reason) {
        <p class="notice">{{ reasonMessages[reason] }}</p>
      }

      <section class="status-grid">
        <article>
          <h2>CanActivate</h2>
          <p>Logged in: <strong>{{ auth.isLoggedIn() ? 'Yes' : 'No' }}</strong></p>
          <button (click)="auth.toggleLogin()">Toggle login</button>
        </article>

        <article>
          <h2>CanActivateChild</h2>
          <p>Admin: <strong>{{ auth.isAdmin() ? 'Yes' : 'No' }}</strong></p>
          <button (click)="auth.toggleAdmin()" [disabled]="!auth.isLoggedIn()">
            Toggle admin
          </button>
        </article>

        <article>
          <h2>CanMatch</h2>
          <p>Feature enabled: <strong>{{ auth.isFeatureEnabled() ? 'Yes' : 'No' }}</strong></p>
          <button (click)="auth.toggleFeature()">Toggle feature</button>
        </article>
      </section>

      <div class="actions">
        <button (click)="continueToRequestedRoute()">Continue to requested route</button>
        <a routerLink="/guard-demo">Open guard demo</a>
      </div>
    </main>
  `,
  styles: [`
    .demo-page { max-width: 900px; margin: 2rem auto; padding: 0 1rem; font-family: Arial, sans-serif; }
    .status-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem; }
    article { padding: 1rem; border: 1px solid #ccc; border-radius: 10px; }
    button, a { display: inline-block; padding: .65rem .9rem; margin-right: .5rem; }
    .actions { margin-top: 1.5rem; }
    .notice { padding: .75rem; background: #fff3cd; border-radius: 6px; }
  `],
})
export class GuardControlComponent {
  readonly auth = inject(AuthDemoService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly reason = this.route.snapshot.queryParamMap.get('reason') ?? '';
  readonly returnUrl =
    this.route.snapshot.queryParamMap.get('returnUrl') ?? '/guard-demo';

  readonly reasonMessages: Record<string, string> = {
    login: 'CanActivate blocked this route because you are logged out.',
    admin: 'CanActivateChild blocked this child route because you are not an admin.',
    feature: 'CanMatch prevented the lazy route from matching because the feature is disabled.',
  };

  continueToRequestedRoute(): void {
    void this.router.navigateByUrl(this.returnUrl);
  }
}
