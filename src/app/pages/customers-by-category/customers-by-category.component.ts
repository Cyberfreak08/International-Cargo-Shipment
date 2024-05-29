import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-customers-by-category',
  templateUrl: './customers-by-category.component.html',
  styleUrls: ['./customers-by-category.component.css']
})
export class CustomersByCategoryComponent implements OnChanges {
  @Input() data: any;

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public pieChartLabels: string[] = [];
  public pieChartDatasets = [
    {
      data: [] as number[]
    }
  ];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.updateChartData(this.data);
    }
  }

  updateChartData(data: any) {
    const labels: string[] = data.map((item: any) => item.customer.name);
    const revenue: number[] = data.map((item: any) => item.customer.totalRevenue);

    this.pieChartLabels = labels;
    this.pieChartDatasets[0].data = revenue;
  }
}
