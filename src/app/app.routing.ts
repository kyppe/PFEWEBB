import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule),
        canActivate: [AuthGuard] // Protect the admin routes
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
