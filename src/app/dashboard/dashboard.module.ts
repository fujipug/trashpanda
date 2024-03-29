import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Permission1Module } from './permission1/permission1.module';
// import { NavModule } from '../components/nav/nav.module';

export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    Permission1Module,
    // NavModule,
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule {
  public static routes = routes;
}

