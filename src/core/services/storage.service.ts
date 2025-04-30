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
  isAdmin: any
  isUser: any

  constructor() {
    this.localStorageValues()
  }

  localStorageValues(){
    this.userRole = localStorage.getItem('userRole');
    this.token = localStorage.getItem('token');
    this.userID = localStorage.getItem('userID');
    this.userName = localStorage.getItem('userName');
    this.isUser = localStorage.getItem('isUser');
    this.isAdmin = localStorage.getItem('isAdmin');
  }



}
