import { Routes } from '@angular/router';
import { HelloComponent } from './pages/hello/hello.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { CounterComponent } from './pages/counter/counter.component';
export const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: '',
    redirectTo: 'hello',
    pathMatch: 'full',
  },
];
