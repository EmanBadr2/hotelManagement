import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  userRole: any
  token: any
  userID: any
  userName: any
  
  isAdmin: boolean = false;
  isUser: boolean = false;

  constructor() {
    this.userOrAdmin()
    this.localStorageValues()
  }

  localStorageValues(){
    this.userRole = localStorage.getItem('userRole');
    this.token = localStorage.getItem('token');
    this.userID = localStorage.getItem('userID');
    this.userName = localStorage.getItem('userName');
  }

  userOrAdmin(){
    if (this.userRole === 'admin') {
          this.isAdmin = true;
        } else if (this.userRole === 'user') {
          this.isUser = true;
        }
  }

 // decodedToken: any = null;

  // loadUserRole(): void {
  //   //call to check role user or admin
  //   if (this.token) {
  //     this.decodedToken = jwtDecode(this.token);
  //     this.userRole = this.decodedToken.role; // Extract role from token
  //     localStorage.setItem('userRole', this.userRole || ''); // Store role in localStorage
  //   }
  //   if (this.userRole === 'admin') {
  //     this.isAdmin = true;
  //   } else if (this.userRole === 'user') {
  //     this.isUser = true;
  //   }

  // }




 
}
