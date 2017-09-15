import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SplashComponent } from './splash.component';
// import { NavModule } from '../components/nav/nav.module';

export const routes = [
  { path: '', component: SplashComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    SplashComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // NavModule,
    RouterModule.forChild(routes),
  ],
})
export class SplashModule {
  public static routes = routes;
}

