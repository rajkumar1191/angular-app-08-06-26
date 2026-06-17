import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Product } from './product/product';
import { Contact } from './contact/contact';
import { ProductDetail } from './product-detail/product-detail';

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
    path: "**",
    component: Home
  }
];
