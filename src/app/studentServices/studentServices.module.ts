import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentServicesComponent } from './studentServices.component';

export const routes = [
  { path: '', component: StudentServicesComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    StudentServicesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class StudentServicesModule {
  public static routes = routes;
}

