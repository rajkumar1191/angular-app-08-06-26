import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthDemoService {
  readonly isLoggedIn = signal(false);
  readonly isAdmin = signal(false);
  readonly isFeatureEnabled = signal(true);

  toggleLogin(): void {
    this.isLoggedIn.update((value) => !value);
    if (!this.isLoggedIn()) {
      this.isAdmin.set(false);
    }
  }

  toggleAdmin(): void {
    this.isAdmin.update((value) => !value);
  }

  toggleFeature(): void {
    this.isFeatureEnabled.update((value) => !value);
  }
}
