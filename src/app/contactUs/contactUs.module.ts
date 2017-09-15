import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contactUs.component';
// import { NavModule } from '../components/nav/nav.module';

export const routes = [
  { path: '', component: ContactUsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // NavModule,
    RouterModule.forChild(routes),
  ],
})
export class ContactUsModule {
  public static routes = routes;
}

