import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../../components/layout/layout.component';
import { DataService } from '../../data.service';
import { MatCardModule } from '@angular/material/card';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HomeComponent } from '../../components/home/home.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { ScrollService } from '../../scroll.service'; // Adjust the path as needed
import { CustomersByCategoryComponent } from '../customers-by-category/customers-by-category.component';
// import { QuarterlyTransactionsComponent } from '../../components/quarterly-transactions/quarterly-transactions.component';
// import { NationalVsInternationalComponent } from '../../components/national-vs-international/national-vs-international.component';
// import { MonthlyTransactionsComponent } from '../../components/monthly-transactions/monthly-transactions.component';

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
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('homeSection') homeSection!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  customersByCategory: any;
  quarterlyTransactions: any;
  nationalVsInternational: any;
  monthlyTransactions: any;

  constructor(private dataService: DataService, private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.dataService.loadData().subscribe((data) => {
      this.customersByCategory = this.dataService.getCustomersByCategoryInQ2(data);
      this.quarterlyTransactions = this.dataService.getQuarterlyTransactions(data, 1);
      this.nationalVsInternational = this.dataService.getNationalVsInternational(data);
      this.monthlyTransactions = this.dataService.getMaxMonthlyTransactionsByCategory(data, 8, 12);
    });
  }

  ngAfterViewInit() {
    this.scrollService.scrollToSection$.subscribe(section => {
      this.scrollToSection(section);
    });
  }

  private scrollToSection(section: string) {
    switch (section) {
      case 'home':
        if (this.homeSection) {
          this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'about':
        if (this.aboutSection) {
          this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'contact':
        if (this.contactSection) {
          this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      default:
        break;
    }
  }
}
