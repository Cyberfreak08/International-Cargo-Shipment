// src/app/pages/layout/layout.component.ts
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ScrollService } from '../../scroll.service'; // Adjust the path as needed

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbar,
    MatIcon,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    MatIconModule,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  loggedUser: any;
  userProfile: any = {
    email: '',
    name: '',
    initials: '',
  };
  constructor(private router: Router, private scrollService: ScrollService) {
    const localUser = localStorage.getItem('loggedUser');
    if (localUser != null) {
      this.loggedUser = JSON.parse(localUser);
      this.userProfile.email = this.loggedUser.email;
      this.userProfile.name = this.loggedUser.name;
      this.userProfile.initials = this.userProfile.name
        ? this.userProfile.name.charAt(0).toUpperCase()
        : '';
    }
  }
  scrollToSection(section: string) {
    this.scrollService.scrollToSection(section);
  }
  onLogoff() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }
}
