import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';
import { ChartsModule } from 'ng2-charts';
// import { NavModule } from '../components/nav/nav.module';

export const routes = [
  { path: '', component: AnalyticsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AnalyticsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    // NavModule,
    RouterModule.forChild(routes),
  ],
})
export class AnalyticsModule {
  public static routes = routes;
}

