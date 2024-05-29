// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { CustomersByCategoryComponent } from './pages/customers-by-category/customers-by-category.component';
import { QuarterlyTransactionsComponent } from './pages/quarterly-transactions/quarterly-transactions.component';
import { NationalVsInternationalComponent } from './pages/national-vs-international/national-vs-international.component';
import { MonthlyTransactionsComponent } from './pages/monthly-transactions/monthly-transactions.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'cust-by-category', component: CustomersByCategoryComponent, canActivate: [AuthGuard] },
  { path: '2nd-quarter', component: QuarterlyTransactionsComponent, canActivate: [AuthGuard] },
  { path: 'cust-volume', component: NationalVsInternationalComponent, canActivate: [AuthGuard] },
  { path: 'last-quarter', component: MonthlyTransactionsComponent, canActivate: [AuthGuard] },

];
