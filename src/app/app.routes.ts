import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './pages/hello/hello.component';
import { LoginComponent } from './pages/login/login.component';
export const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    redirectTo: 'hello',
    pathMatch: 'full',
  },
];
