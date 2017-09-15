import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'tp-splash',
  styleUrls: ['./splash.style.scss'],
  templateUrl: './splash.template.html'
})
export class SplashComponent implements OnInit {

  public localState: any;

  constructor(public route: ActivatedRoute) {}

  public ngOnInit() {
    jQuery('.button-collapse').sideNav();
    jQuery('.parallax').parallax();
    jQuery('#services-dropdown-button').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: false, // Does not change width of dropdown to that of the activator
          hover: true, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: true, // Displays dropdown below the button
          alignment: 'left', // Displays dropdown with edge aligned to the left of button
          stopPropagation: false // Stops event propagation
        }
      );
  }

}
