import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var jQuery: any;
declare var firebase: any;
declare var Materialize: any;

@Component({
  selector: 'tp-permission1',
  styleUrls: ['./permission1.style.scss'],
  templateUrl: './permission1.template.html'
})
export class Permission1Component implements OnInit {

  public localState: any;
  @Input() user: any;
  // date: any;

  constructor(public route: ActivatedRoute, public router: Router) {}

  public ngOnInit() {
    console.log(this.user);
    // Get Current Date
    // this.date = new Date();


    // jQuery('.button-collapse').sideNav({
    //     menuWidth: 300, // Default is 300
    //     edge: 'left', // Choose the horizontal origin
    //     closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    //     draggable: true, // Choose whether you can drag to open on touch screens,
    //     onOpen: function(el) { }, // A function to be called when sideNav is opened
    //     onClose: function(el) { }, // A function to be called when sideNav is closed
    //   });

    //TODO: Seperate into service to get User info
    // var user = firebase.auth().currentUser;
    // if (user) {
    //   // User is signed in.
    //   var ref = firebase.database().ref("Users/" + user.uid);
    //   return ref.once("value")
    //   .then((snapshot) => {
    //     // this.user = snapshot.val();
    //     this.getNetworkInfo(snapshot.val().default, user.uid);
    //     // return Promise.resolve(event);
    //   }).catch(() => {
    //     // return Promise.resolve(this.getBadEvent(eventKey));
    //   });

      
    // } else {
    //   // No user is signed in.

    // }     
  }

  // getNetworkInfo(network, user) {
  //   var ref = firebase.database().ref("Networks/" + network + "/Users/" + user);
  //   return ref.once("value")
  //   .then((snapshot) => {
  //     this.user = snapshot.val();
  //     console.log(this.user);
  //     // return Promise.resolve(event);
  //   }).catch(() => {
  //     // return Promise.resolve(this.getBadEvent(eventKey));
  //   });
  // }

  logout() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      Materialize.toast('Signed Out', 3000);
      this.router.navigate(['/splash']);
     
    }).catch((error) => {
      // An error happened.
      Materialize.toast('There was an error', 3000, 'red');
    });
  }

}
