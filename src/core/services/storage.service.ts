import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  userRole: string | null = null;
  token: string | null = null;
  userID: string | null = null;
  userName: string | null = null;

  isAdmin: boolean = false;
  isUser: boolean = false;

  constructor() {
    this.loadFromLocalStorage(); // Only initialize, don't assume permanent state
  }

  loadFromLocalStorage() {
    this.userRole = localStorage.getItem('userRole');
    this.token = localStorage.getItem('token');
    this.userID = localStorage.getItem('userID');
    this.userName = localStorage.getItem('userName');
    this.setUserFlags();
  }

  setUserFlags() {
    this.isAdmin = this.userRole === 'admin';
    this.isUser = this.userRole === 'user';
  }

  logout() {
    localStorage.clear();
    this.resetState();
  }

  resetState() {
    this.userRole = null;
    this.token = null;
    this.userID = null;
    this.userName = null;
    this.isAdmin = false;
    this.isUser = false;
  }
}
