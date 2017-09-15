import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './signIn.component';
// import { NavModule } from '../components/nav/nav.module';

export const routes = [
  { path: '', component: SignInComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // NavModule,
    RouterModule.forChild(routes),
  ],
})
export class SignInModule {
  public static routes = routes;
}

