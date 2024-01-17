import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { productIdGuard } from './guards/product-id.guard';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { leavePageGuard } from './guards/leave-page.guard';
import { productResolver } from './resolvers/product.resolver';

export const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    title: 'Welcome'
  },
  {
    path: 'products',
    component: ProductsListComponent,
    title: 'Lista de productos'
  },
  {
    path: 'products/:id',
    canActivate: [productIdGuard],
    component: ProductDetailComponent,
    resolve: {
      product: productResolver
    },
    title: 'Detalle del producto'
  },
  {
    path: 'products/edit/:id',
    canActivate: [productIdGuard],
    canDeactivate: [leavePageGuard],
    resolve: {
      product: productResolver
    },
    component: ProductEditComponent,
    title: 'Modificando producto'
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];
