import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  standalone:true,
  selector: 'app-dashboard',
  imports:[RouterOutlet,RouterLink,RouterLinkActive,LayoutComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
