import { Component, OnInit, Input } from '@angular/core';
import {Chart} from 'chart.js';
import { InfoLocal } from '../../../models/info-local'
import { AppService } from 'src/app/app-service.service'
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
    public infoLocal: InfoLocal
    public pots: number[] = []
    public names: string[] = []

 constructor(private appService: AppService) { 
  }

  ngOnInit(): void {
    this.pegaDados()
  }
  
  geraGrafico1(): void {
    var myChart1 = new Chart('myChart1', {
        type: 'bar',
        data: {
            labels: this.names,
            datasets: [{
                label: 'Capacidade de Geração [MW]',
                data: this.pots,
                backgroundColor: [
                    'rgba(255, 99, 132, .7)',
                    'rgba(255, 99, 132, .7)',
                    'rgba(255, 99, 132, .7)',
                    'rgba(255, 99, 132, .7)',
                    'rgba(255, 99, 132, .7)'
                ],
                borderColor: [
                    'black',
                    'black',
                    'black',
                    'black',
                    'black'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }});

  }

  geraGrafico2() {
    var myChart2 = new Chart('myChart2', {
        type: 'pie',
        data: {
            labels: this.names,
            datasets: [{
                label: 'Capacidade de Geração',
                data: this.pots,
                backgroundColor: [
                    'red',
                    'blue',
                    'green',
                    'gray',
                    'yellow'
                ],
                borderWidth: 1
            }]
        },    
     })
    }

  pegaDados() {
    this.appService.getpot().subscribe(
        infoLocais => {
            this.names = infoLocais.map(infoLocal => {return infoLocal.name})
            this.pots = infoLocais.map(infoLocal => {return infoLocal.pot})
        this.geraGrafico1()
        this.geraGrafico2()
    })
  }

}


