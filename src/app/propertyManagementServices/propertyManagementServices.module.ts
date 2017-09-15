import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PropertyManagementServicesComponent } from './propertyManagementServices.component';

export const routes = [
  { path: '', component: PropertyManagementServicesComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    PropertyManagementServicesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class PropertyManagementServicesModule {
  public static routes = routes;
}

