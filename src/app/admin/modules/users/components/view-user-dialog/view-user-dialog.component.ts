import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-view-user-dialog',
  templateUrl:  './view-user-dialog.component.html',
  styleUrls: ['./view-user-dialog.component.scss'],
})
export class ViewUserDialogComponent implements OnInit {
  userData: any;
  loading = true;

  constructor(
    private config: DynamicDialogConfig,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    const userId = this.config.data.id;
    if (userId) {
      this.usersService.getUserById(userId).subscribe(
        (res: any) => {
          this.userData = res.data.user;
          this.loading = false;
        },
        (err) => {
          console.error('Error fetching user:', err);
          this.loading = false;
        }
      );
    }
  }
}