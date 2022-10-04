import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { CovidHTTP } from 'src/app/Models/CovidCases';





@Component({
  selector: 'app-covid-stats',
  templateUrl: './covid-stats.component.html',
  styleUrls: ['./covid-stats.component.css']
})
export class CovidStatsComponent implements OnInit {
  covidcases: CovidHTTP[] = [];
  covidcases1: CovidHTTP[] = [];
  displayedColumns: string[] = ['infected', 'tested', 'recovered', 'decease', 'country', 'moreData', 'historyData', 'sourceUrl', 'lastUpdatedApify'];
  chart: any;
  dataPoints: any = [];


  constructor(private conexion:ConexionService) { }
  

  
  ngOnInit() {
    this.obtenercasoscovidhttp();
this.conexion.get_covid_data_chart()
    .subscribe((response: any) => {
      var responseData = response;
      responseData.forEach((covidcase:any) => {
        this.dataPoints.push({
          label: covidcase.country,
          y: covidcase.infected,
          recovered: covidcase.recovered,
        });
      });
      
    });
   
  }

  obtenercasoscovidhttp() {
  this.conexion.get_covid_data().subscribe(doc=>{
  this.covidcases=doc;
  });
  }
ColumnChartCovidCases = {
      animationEnabled: true,
      theme: 'light2',
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
          type: 'pie',
          dataPoints: this.dataPoints,
        },
      ],
  };

  getChartInstance(chart: object) {
    this.chart = chart;
  }
}




