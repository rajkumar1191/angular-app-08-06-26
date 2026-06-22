import { Routes } from '@angular/router';
import { adminChildGuard, unsavedChangesGuard } from './routing-demo.guards';
import { userResolver } from './user.resolver';

export const GUARD_DEMO_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/demo-layout.component').then((m) => m.DemoLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/demo-home.component').then((m) => m.DemoHomeComponent),
      },
      {
        path: 'profile/:id',
        loadComponent: () =>
          import('./pages/profile.component').then((m) => m.ProfileComponent),
        resolve: { user: userResolver },
      },
      {
        path: 'edit',
        loadComponent: () =>
          import('./pages/editor.component').then((m) => m.EditorComponent),
        canDeactivate: [unsavedChangesGuard],
      },
      {
        path: 'admin',
        canActivateChild: [adminChildGuard],
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadComponent: () =>
              import('./pages/admin.component').then((m) => m.AdminComponent),
          },
          {
            path: 'settings',
            loadComponent: () =>
              import('./pages/admin-settings.component').then(
                (m) => m.AdminSettingsComponent,
              ),
          },
        ],
      },
    ],
  },
];
