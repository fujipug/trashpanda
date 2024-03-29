/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

declare var firebase: any;

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: "./app.template.html"
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/trash_panda_logo.png';
  public name = 'Trash Panda';
  public url = 'https://gettrashpanda.com';
  isSignedIn: boolean;

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);

    var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
      this.isSignedIn = true;
    } else {
      // No user is signed in.
      this.isSignedIn = false;
    }
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
