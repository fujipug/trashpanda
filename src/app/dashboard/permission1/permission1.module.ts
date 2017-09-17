import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Permission1Component } from './permission1.component';
// import { NavModule } from '../components/nav/nav.module';

// export const routes = [
//   { path: '', component: Permission1Component, pathMatch: 'full' }
// ];

@NgModule({
  declarations: [
    Permission1Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // NavModule,
    // RouterModule.forChild(routes),
  ],
  exports: [Permission1Component]
})
export class Permission1Module {
  // public static routes = routes;
}

