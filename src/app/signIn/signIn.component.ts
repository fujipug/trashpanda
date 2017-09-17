import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var jQuery: any;
declare var firebase: any;
declare var Materialize: any;

@Component({
  selector: 'tp-sign-in',
  styleUrls: ['./signIn.style.scss'],
  templateUrl: './signIn.template.html'
})
export class SignInComponent implements OnInit {

  public localState: any;
  email: string;
  password: string;

  constructor(public route: ActivatedRoute, public router: Router) {}

  public ngOnInit() {

  }

  signIn() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
      Materialize.toast('Welcome Back', 3000, 'green');
      this.router.navigate(['/dashboard']);
    }).catch((error) => {
      Materialize.toast(error, 3000, 'red');
    });
  }

}
