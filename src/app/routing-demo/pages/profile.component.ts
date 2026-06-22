import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DemoUser } from '../user.resolver';

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  template: `
    <section>
      <h2>Resolved profile</h2>
      <p>The router waited for <code>userResolver</code> before creating this component.</p>
      <dl>
        <dt>ID</dt><dd>{{ user.id }}</dd>
        <dt>Name</dt><dd>{{ user.name }}</dd>
        <dt>Email</dt><dd>{{ user.email }}</dd>
        <dt>Role</dt><dd>{{ user.role }}</dd>
      </dl>
      <a routerLink="/guard-demo/profile/2">Resolve user 2</a>
    </section>
  `,
})
export class ProfileComponent {
  private readonly route = inject(ActivatedRoute);
  readonly user = this.route.snapshot.data['user'] as DemoUser;
}
