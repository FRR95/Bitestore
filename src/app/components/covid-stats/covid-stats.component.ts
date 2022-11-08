import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { CovidHTTP } from 'src/app/Models/CovidCases';
import * as _ from 'lodash';
import { trigger, state, style, animate, transition } from '@angular/animations';






@Component({
  selector: 'app-covid-stats',
  templateUrl: './covid-stats.component.html',
  styleUrls: ['./covid-stats.component.css'],
  animations: [
    trigger('foobar', [
      state('show', style({opacity: 1,transform: "translateX(0)"})),
      state('hide', style({opacity: 0,transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class CovidStatsComponent implements OnInit {
  state= 'hide';
  covidcases: CovidHTTP[] = [];
  covidcases1: CovidHTTP[] = [];
  covidcaseslodash: CovidHTTP[] = [];
  covidcaseslodashfiltered: any = [];

  displayedColumns: string[] = ['infected', 'tested', 'recovered', 'decease', 'country', 'moreData', 'historyData', 'sourceUrl', 'lastUpdatedApify'];
  chart: any;
  dataPoints: any = [];
  


  constructor(private conexion:ConexionService,private el:ElementRef) { }
  

  
  ngOnInit() {
    this.obtenercasoscovidhttp();
this.conexion.get_covid_data_chart()
    .subscribe((response: any) => {
    this.covidcaseslodash=response;
    this.covidcaseslodashfiltered = _.filter(this.covidcaseslodash, { 'infected': 34815258 });
    this.covidcaseslodashfiltered.forEach((covidcase:any) => {
        this.dataPoints.push({
          label: covidcase.country,
          y: covidcase.infected,
          recovered: covidcase.recovered,
        });
      });
      
    });

this.RevealLodash();
this.obtenercasoscovidlodash();

   
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition - 250) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }
  }

  obtenercasoscovidhttp() {
  this.conexion.get_covid_data().subscribe(doc=>{
  this.covidcases=doc;
  });
  }



  obtenercasoscovidlodash() {
    this.conexion.get_covid_data().subscribe(doc=>{
    this.covidcaseslodash=doc;
    this.covidcaseslodashfiltered = _.filter(this.covidcaseslodash, { 'infected': 34815258 });
    });
    
    }
ColumnChartCovidCases = {
      animationEnabled: true,
      theme: 'light2',
      backgroundColor: "#cae04d",
      title: {
        text: 'Covid 19 graphic column countries with its infected population ',
      },
      axisX: {
        title: 'Countries',
        reversed: true,
      },
      axisY: {
        title: 'Population infected (in Millions)',
        labelFormatter: function (e: any) {
          return e.value ;
        },
      },
      toolTip: {
        contentFormatter: function (e: any) {
          return (
            e.entries[0].dataPoint.label +
            ' : ' +
            (e.entries[0].dataPoint.y / 1000000).toFixed(1) +
            'M'
            +
            '  Recovered:'
            +
            (e.entries[0].dataPoint.recovered/ 1000000).toFixed(1)

          +
          'M'

          );
        },
      },
      data: [
        {
          type: 'column',
          dataPoints: this.dataPoints,
        },
      ],
  };

  PieChartCovidCases = {
      animationEnabled: true,
      theme: 'light2',
      backgroundColor: "#cae04d",
      title: {
        text: 'Covid 19 pie graphic countries with its infected population ',
      },
      axisX: {
        title: 'Countries',
        reversed: true,
      },
      axisY: {
        title: 'Population infected (in Millions)',
        labelFormatter: function (e: any) {
          return e.value ;
        },
      },
      data: [
        {
          type: 'pie',
          indexLabel: "{label}: {y} and {recovered} recovered",
          dataPoints: this.dataPoints,
        },
      ],
  };
RevealLodash(){
  var array = [1, 2, 3, 4];
  var evens = _.remove(array, function(n) {
    return n  == 2;
  });
  console.log('Array:'+array+'ArrayLodash:'+evens);
}

}




