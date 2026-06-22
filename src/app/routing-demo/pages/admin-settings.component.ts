import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-settings',
  template: `
    <section>
      <h2>Admin settings child route</h2>
      <p>This second child demonstrates that one parent guard protects the whole subtree.</p>
    </section>
  `,
})
export class AdminSettingsComponent {}
