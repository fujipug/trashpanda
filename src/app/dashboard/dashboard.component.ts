import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var jQuery: any;
declare var firebase: any;

@Component({
  selector: 'tp-dashboard',
  styleUrls: ['./dashboard.style.scss'],
  templateUrl: './dashboard.template.html'
})
export class DashboardComponent implements OnInit {

  public localState: any;
  user: any;

  constructor(public route: ActivatedRoute) {}

  public ngOnInit() {
    jQuery('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function(el) { }, // A function to be called when sideNav is opened
        onClose: function(el) { }, // A function to be called when sideNav is closed
      });

    var ref = firebase.database().ref("Users/FYadTl9JYFRBDTVnvX0I6RyuOIG2");
    return ref.once("value")
    .then((snapshot) => {
      console.log(snapshot.val());
      this.user = snapshot.val();
      return Promise.resolve(event);
    }).catch(() => {
      // return Promise.resolve(this.getBadEvent(eventKey));
    });
          
  }

}
