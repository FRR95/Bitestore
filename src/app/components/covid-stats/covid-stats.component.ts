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
  chart = [];


  constructor(private conexion:ConexionService) { }
  

  
  ngOnInit() {
    this.obtenercasoscovidhttp();

   
  }

  obtenercasoscovidhttp() {
  this.conexion.get_covid_data().subscribe(doc=>{
  this.covidcases=doc;
  });
  }




    columnChartOptions = {
        animationEnabled: true,
        title: {
        text: 'Covid-19 Cases',
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: 'pie',
            dataPoints: [
            { label: 'apple', y: 10 },
            { label: 'orange', y: 15 },
            { label: 'banana', y: 25 },
            { label: 'mango', y: 30 },
            { label: 'grape', y: 28 },
            ],
        },
        ],
    };

    columnChartOptions1 = {
      animationEnabled: true,
      title: {
      text: 'Covid-19 Cases',
      },
      data: [
      {
          
          type: 'pie',
          dataPoints: [
            { label: 'apple', y: 10 },
            { label: 'orange', y: 15 },
            { label: 'banana', y: 25 },
            { label: 'mango', y: 30 },
            { label: 'grape', y: 28 },
            ],
      },
      ],
  };

    pieChartOptions = {
        animationEnabled: true,
        title: {
        text: 'Angular Pie Chart in Material UI Tabs',
        },
        theme: 'light2', // "light1", "dark1", "dark2"
        data: [
        {
            type: 'pie',
            dataPoints: [
            { label: 'apple', y: 10 },
            { label: 'orange', y: 15 },
            { label: 'banana', y: 25 },
            { label: 'mango', y: 30 },
            { label: 'grape', y: 28 },
            ],
        },
        ],
    };

    lineChartOptions = {
        animationEnabled: true,
        title: {
        text: 'Angular Line Chart in Material UI Tabs',
        },
        theme: 'light2', // "light1", "dark1", "dark2"
        data: [
        {
            type: 'line',
            dataPoints: [
            { label: 'apple', y: 10 },
            { label: 'orange', y: 15 },
            { label: 'banana', y: 25 },
            { label: 'mango', y: 30 },
            { label: 'grape', y: 28 },
            ],
        },
        ],
    };

 
}




