import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'tp-analytics',
  styleUrls: ['./analytics.style.scss'],
  templateUrl: './analytics.template.html'
})
export class AnalyticsComponent implements OnInit {

  public localState: any;

  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

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

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

}
