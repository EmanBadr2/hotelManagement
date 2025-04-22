import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuOpen = false;
 

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
