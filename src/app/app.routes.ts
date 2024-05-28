import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path:'',loadComponent:()=>import('./pages/dashboard/dashboard.component').then((c)=>c.DashboardComponent)},
    {path:'login',loadComponent:()=>import('./pages/login/login.component').then((c)=>c.LoginComponent)},
];
