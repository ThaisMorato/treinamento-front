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
    public infoLocal: InfoLocal = {
        id: "1",
        name: "A",
        latlng: "1",
        pot: "1",
      }
    public infoLocais: InfoLocal[] = []

 constructor(private appService: AppService) { 
  }

  ngOnInit(): void {
    this.pegaDados()
    console.log(this.infoLocais[0])
  }

  geraGrafico(): void {

    var myChart = new Chart('myChart', {
        type: 'bar',
        data: {
            labels: ['Itaipú', 'Belo Monte', 'Trê Marias', 'Tucuruí', 'Ilha Solteira'],
            datasets: [{
                label: 'Potência despachada',
                data: [14000 , 11233, 396, 8370, 3444],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
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
        } });

  }

  pegaDados() {
    this.appService.getpot().subscribe(
        infoLocais => {
        for (var i = 0; i < infoLocais.length; i++) {
            this.infoLocais[i] = infoLocais[i]
        }
    })
    this.geraGrafico()
  }

}


