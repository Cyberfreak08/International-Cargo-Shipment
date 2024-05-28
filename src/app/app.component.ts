import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'International-Cargo-shipment';
}
