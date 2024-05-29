import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';
import { Location } from '@angular/common';  // Import Location service

@Component({
  selector: 'app-quarterly-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quarterly-transactions.component.html',
  styleUrl: './quarterly-transactions.component.css',
})
export class QuarterlyTransactionsComponent {
  data: any;
  public quarter: number = 1;
  constructor(private dataService: DataService,private location: Location) {}

  ngOnInit(): void {
    this.loadQuarterlyTransactions(this.quarter);
  }

  loadQuarterlyTransactions(quarter: number): void {
    this.dataService.loadData().subscribe((data) => {
      const officeId = 1; // Assuming the office ID is 1 for the Singapore office
      this.data = this.dataService.getQuarterlyTransactions(
        data,
        officeId,
        quarter
      );
    });
  }

  onQuarterChange(event: any): void {
    const selectedQuarter = event.target.value;
    this.loadQuarterlyTransactions(selectedQuarter);
  }
  goBack(): void {
    this.location.back();  // Navigate back to the previous page
  }
}
