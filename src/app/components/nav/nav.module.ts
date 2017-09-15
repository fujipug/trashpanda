import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';

export const routes = [
  { path: '', component: NavComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [NavComponent]
})
export class NavModule {
  public static routes = routes;
}

