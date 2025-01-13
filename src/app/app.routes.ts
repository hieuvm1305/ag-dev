import { Routes } from '@angular/router';
import { HelloComponent } from './pages/hello/hello.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
export const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent },

  {
    path: '',
    redirectTo: 'hello',
    pathMatch: 'full',
  },
];
