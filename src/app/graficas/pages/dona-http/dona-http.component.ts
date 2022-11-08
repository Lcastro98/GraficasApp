import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';
  
  constructor(private graficasServices: GraficasService) { }

  ngOnInit(): void {

    this.graficasServices.getUsuariosRedesSociales()
      .subscribe( data => {
        console.log(data);
        const labels = Object.keys(data);
        const values = Object.values(data);
        this.doughnutChartData = {
          labels,
          datasets: [
            {data: values, backgroundColor: ['#0075ED', '#00BAF7', '#00E0DB', '#00F7AD', '#00ED63']}
          ]
        }
      });
  }

}
