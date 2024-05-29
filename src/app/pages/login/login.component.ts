// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; // Import RouterOutlet and other router directives

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet, // Include RouterOutlet in imports
    RouterLink,
    RouterLinkActive,
  ],
})
export class LoginComponent {
  isSignDivVisible: boolean = true;

  signUpObj: SignUpModel = new SignUpModel();
  loginObj: LoginModel = new LoginModel();

  constructor(private router: Router) {}

  onRegister() {
    const localUser = localStorage.getItem('angular17users');
    if (localUser != null) {
      const users = JSON.parse(localUser);

      const isUserExists = users.some(
        (user: SignUpModel) => user.email === this.signUpObj.email
      );
      if (isUserExists) {
        this.isSignDivVisible = false;
        return;
      }

      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
      this.router.navigateByUrl('/dashboard');
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
      this.router.navigateByUrl('/dashboard');
    }
    alert('Registration Success');
  }

  onLogin() {
    const localUsers = localStorage.getItem('angular17users');
    if (localUsers != null) {
      const users = JSON.parse(localUsers);
      const isUserPresent = users.find(
        (user: SignUpModel) =>
          user.email === this.loginObj.email && user.password === this.loginObj.password
      );
      if (isUserPresent !== undefined) {
        alert('User Found...');
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/dashboard');
      } else {
        const isUserExists = users.some(
          (user: SignUpModel) => user.email === this.loginObj.email
        );
        if (isUserExists) {
          alert('Incorrect Password');
        } else {
          alert('No User Found');
        }
      }
    }
  }
  
}

export class SignUpModel {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.name = '';
    this.password = '';
  }
}

export class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
