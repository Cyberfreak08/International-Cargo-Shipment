import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-monthly-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monthly-transactions.component.html',
  styleUrl: './monthly-transactions.component.css'
})
export class MonthlyTransactionsComponent {
  data: any;

  constructor(private dataService: DataService, private location: Location) {}

  ngOnInit(): void {
    this.loadMaxMonthlyTransactionsByCategory();
  }

  loadMaxMonthlyTransactionsByCategory(): void {
    this.dataService.loadData().subscribe((data) => {
      this.data = this.dataService.getMaxMonthlyTransactionsByCategory(data, 8, 12);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
