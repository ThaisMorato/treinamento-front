import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var chart = new Chart("g1", {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Gráfico de barras',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },

        // Configuration options go here
        options: {}
    });

    var chart = new Chart("g2", {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'Dado azul',
              borderColor: 'rgb(151, 215, 222)',
              fill: false,
              lineTension: 0.4,
              data: [0, 33, 30, 10, 11, 30, 45]
          },
          {
            label: 'Dado rosa',
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            lineTension: 0.4,
            data: [65, 18, 23, 55, 35, 27, 20]
        }]
      },

      // Configuration options go here
      options: {}
    });
  }

  

}
