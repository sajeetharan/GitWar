import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @ViewChild(BaseChartDirective) private _chart;
  @Input() score1: any;
  @Input() score2: any;
  lineChartLabels: String[] = [];
  datasets: any[];
  public lineChartLegend = true;
  public lineChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
    this.datasets = [];
    this.buildchart();
  }

  buildchart() {
    this.lineChartLabels.push(this.score1.name);
    this.lineChartLabels.push(this.score2.name);
    this.datasets.push(this.score1.score);
    this.datasets.push(this.score2.score);

  }
  forceChartRefresh() {
    setTimeout(() => {
      this._chart.refresh();
    }, 10);
  }
}
