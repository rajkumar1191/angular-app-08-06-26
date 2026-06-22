import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <section>
      <h2>Admin child route</h2>
      <p><code>CanActivateChild</code> allowed this page because admin mode is enabled.</p>
    </section>
  `,
})
export class AdminComponent {}
