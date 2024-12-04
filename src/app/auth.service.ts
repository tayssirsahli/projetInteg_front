import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersKey = 'mockUsers';
  private currentUserKey = 'mockCurrentUser';

  constructor() {}

  register(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');

    // Check if the user already exists
    if (users.find((user: any) => user.email === email)) {
      return false;
    }

    // Add the new user
    users.push({ email, password });
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');
    const user = users.find((user: any) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.currentUserKey);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(this.currentUserKey) || 'null');
  }
}
