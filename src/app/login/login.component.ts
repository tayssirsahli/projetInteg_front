import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: [],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email === 'admin@gmail.com' && this.password === '123') {
      this.errorMessage = '';
      alert('Login successful!');
      this.router.navigate(['/dashboard']);

    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
