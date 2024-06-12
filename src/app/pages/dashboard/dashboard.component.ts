import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../../components/layout/layout.component';
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
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {}
