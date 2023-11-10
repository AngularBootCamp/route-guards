// https://github.com/stackblitz/core/issues/2366
import 'zone.js'; // Avoid error in StackBlitz for Angular polyfill

import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  Routes,
  withHashLocation,
  withInMemoryScrolling
} from '@angular/router';

import { AdminComponent } from './app/admin.component';
import { AppComponent } from './app/app.component';
import { AuthGuard } from './app/auth.guard';
import { BigFormComponent } from './app/big-form.component';
import { ForbiddenComponent } from './app/forbidden.component';
import { FormDeactivateGuard } from './app/form-deactive.guard';
import { HomeComponent } from './app/home.component';
import { NameComponent } from './app/name.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hello', component: NameComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bigform',
    component: BigFormComponent,
    canDeactivate: [FormDeactivateGuard]
  }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withHashLocation(),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
    )
  ]
}).catch(err => console.error(err));
