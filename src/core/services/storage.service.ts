import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  userRole: string | null = localStorage.getItem('userRole');
  token: string | null = localStorage.getItem('token');
  userID: string | null = localStorage.getItem('userID');
  userName: string | null = localStorage.getItem('userName');
  decodedToken!: any;
  isAdmin!: boolean;
  isUser!: boolean;
  isLogged!: boolean;

  constructor() {}

  loadUserRole(): void {
    //call to check role user or admin
    if (this.token) {
      this.decodedToken = jwtDecode(this.token);
      this.userRole = this.decodedToken.role; // Extract role from token
      localStorage.setItem('userRole', this.userRole || ''); // Store role in localStorage
    }
    if (this.userRole == 'admin') {
      this.isAdmin = true;
    } else {
      this.isUser = true;
    }
  }

  isLoggedIn(): void {
    // call to check is loggedIn
    if (this.isUser) {
      this.isLogged = true;
    }
  }
}
