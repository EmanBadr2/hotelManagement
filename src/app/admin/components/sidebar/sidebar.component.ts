import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';
import { Router } from '@angular/router';

interface Menu {
  name: string;
  icon: string;
  route?: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() collapsedChange = new EventEmitter<boolean>();

  isCollapsed = false;
  menuList: Menu[] = [];
  ref!: DynamicDialogRef;
  private router=inject(Router);
  private dialogService = inject(DialogService);

  private iconMap: { [key: string]: string } = {
    home: 'pi-home',
    group: 'pi-users',
    grid_view: 'pi-th-large',
    favorite: 'pi-star',
    event_note: 'pi-calendar',
  };

  private allMenuItems: Menu[] = [
    { name: 'Home', icon: 'home', route: 'home' },
    { name: 'Users', icon: 'group', route: 'users' },
    { name: 'Rooms', icon: 'grid_view', route: 'rooms' },
    { name: 'Booking', icon: 'grid_view', route: 'booking' },
    { name: 'Ads', icon: 'event_note', route: 'Ads' },
    { name: 'Facilities', icon: 'group', route: 'facilities' },
    { name: 'Change password', icon: 'pi pi-key', route: 'changepassword' },
    { name: 'Logout', icon: 'pi pi-sign-out' },
  ];

  ngOnInit(): void {
    this.menuList = this.allMenuItems.map((item) => ({
      ...item,
      icon: this.iconMap[item.icon] || item.icon,
    }));
  }
  onMenuClick(item: Menu) {
    if (item.name === 'Logout') {
      this.logOut();
    }
  }
  logOut() {
    this.ref = this.dialogService.open(LogoutDialogComponent, {
      header: 'LogOut',
      width: '30vw',
    });
    this.ref.onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        localStorage.clear(); // Clear localStorage
        // Optionally redirect to login
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
