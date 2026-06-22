import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-home',
  template: `
    <section>
      <h2>CanActivate passed</h2>
      <p>You are logged in, so the protected lazy feature was activated.</p>
      <p>Use the links above to trigger the resolver and the other guards.</p>
    </section>
  `,
})
export class DemoHomeComponent {}
