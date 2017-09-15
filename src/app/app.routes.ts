import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      loadChildren: './splash/splash.module#SplashModule' },
  // { path: 'home',  component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'splash', loadChildren: './splash/splash.module#SplashModule' },
  { path: 'signIn', loadChildren: './signIn/signIn.module#SignInModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'studentServices', loadChildren: './studentServices/studentServices.module#StudentServicesModule' },
  { path: 'propertyManagementServices', loadChildren: './propertyManagementServices/propertyManagementServices.module#PropertyManagementServicesModule' },
  // { path: 'detail', loadChildren: './+detail#DetailModule'},
  // { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
