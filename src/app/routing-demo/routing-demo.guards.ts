import { inject } from '@angular/core';
import {
  CanActivateChildFn,
  CanActivateFn,
  CanDeactivateFn,
  CanMatchFn,
  Router,
} from '@angular/router';
import { AuthDemoService } from './auth-demo.service';

export interface HasUnsavedChanges {
  hasUnsavedChanges(): boolean;
}

export const authGuard: CanActivateFn = (_route, state) => {
  const auth = inject(AuthDemoService);
  const router = inject(Router);

  return auth.isLoggedIn()
    ? true
    : router.createUrlTree(['/guard-control'], {
        queryParams: { returnUrl: state.url, reason: 'login' },
      });
};

export const adminChildGuard: CanActivateChildFn = (_childRoute, state) => {
  const auth = inject(AuthDemoService);
  const router = inject(Router);

  return auth.isAdmin()
    ? true
    : router.createUrlTree(['/guard-control'], {
        queryParams: { returnUrl: state.url, reason: 'admin' },
      });
};

export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = (
  component,
) => {
  return !component.hasUnsavedChanges()
    || confirm('You have unsaved changes. Do you really want to leave?');
};

export const featureMatchGuard: CanMatchFn = (_route, segments) => {
  const auth = inject(AuthDemoService);
  const router = inject(Router);

  return auth.isFeatureEnabled()
    ? true
    : router.createUrlTree(['/guard-control'], {
        queryParams: {
          returnUrl: `/${segments.map((segment) => segment.path).join('/')}`,
          reason: 'feature',
        },
      });
};
