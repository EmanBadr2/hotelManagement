import { Component, inject, OnInit } from '@angular/core';
import { StorageService } from 'src/core/services/storage.service';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuOpen = false;
  userName = '';
  isUserLoggedIn: boolean = false; // Replace with actual user check
  serviceStorge = inject(StorageService);
  ngOnInit() {
    this.isUserLoggedIn = this.serviceStorge.isLogged; 
    this.userName = this.serviceStorge.userName || ''; // Get the user name from the service
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
