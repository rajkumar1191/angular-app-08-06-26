import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Product } from './product/product';
import { Contact } from './contact/contact';
import { ProductDetail } from './product-detail/product-detail';
import { ParentComponent } from './parent/parent';
import { authGuard, featureMatchGuard } from './routing-demo/routing-demo.guards';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'product',
    component: Product,
  },
  {
    path: 'product-detail/:id',
    component: ProductDetail,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'guard-control',
    loadComponent: () =>
      import('./routing-demo/guard-control.component').then(
        (m) => m.GuardControlComponent,
      ),
  },
  {
    path: 'guard-demo',
    canMatch: [featureMatchGuard],
    canActivate: [authGuard],
    loadChildren: () =>
      import('./routing-demo/guard-demo.routes').then(
        (m) => m.GUARD_DEMO_ROUTES,
      ),
  },
  {
    path: '**',
    component: Home,
  }
];

//router guard - canActivate, canDeactivate, canLoad, canMatch