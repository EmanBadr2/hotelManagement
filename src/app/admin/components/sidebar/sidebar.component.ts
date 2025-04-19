import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
    { name: 'Change password', icon: 'pi pi-key' },
    { name: 'Logout', icon: 'pi pi-sign-out' },
  ];

  ngOnInit(): void {
    this.menuList = this.allMenuItems.map((item) => ({
      ...item,
      icon: this.iconMap[item.icon] || item.icon,
    }));
  }
}
