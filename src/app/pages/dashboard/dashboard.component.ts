import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../../components/layout/layout.component';
import { DataService } from '../../data.service';
import { MatCardModule } from '@angular/material/card';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HomeComponent } from '../../components/home/home.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { CustomersByCategoryComponent } from '../customers-by-category/customers-by-category.component';
@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LayoutComponent,
    CommonModule,
    MatCardModule,
    NgxChartsModule,
    HomeComponent,
    AboutUsComponent,
    ContactFormComponent,
    CustomersByCategoryComponent,
    // QuarterlyTransactionsComponent,
    // NationalVsInternationalComponent,
    // MonthlyTransactionsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('homeSection') homeSection!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  customersByCategory: any;
  quarterlyTransactions: any;
  nationalVsInternational: any;
  monthlyTransactions: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.loadData().subscribe((data) => {
      this.customersByCategory =
        this.dataService.getCustomersByCategoryInQ2(data);
      // this.quarterlyTransactions = this.dataService.getQuarterlyTransactions(data, 1,1);
      this.nationalVsInternational =
        this.dataService.getNationalVsInternational(data);
      this.monthlyTransactions =
        this.dataService.getMaxMonthlyTransactionsByCategory(data, 8, 12);
    });
  }
}
