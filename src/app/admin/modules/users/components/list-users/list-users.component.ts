import { Component } from '@angular/core';
import { DialogAddComponent } from 'src/app/admin/components/shared/dialog-add-edit/dialog-add.component';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { UsersService } from '../../services/users.service';
import { ViewUserDialogComponent } from '../view-user-dialog/view-user-dialog.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {
  userList: any[] = [];
  rows: number = 5;
  currentPage: number = 0;
  totalCount: number = 0;
  isLoading: boolean = false;
  loading: boolean = true;
  error: string = '';
  ref!: DynamicDialogRef;
    constructor(
      private _UsersService: UsersService,
      private dialogService: DialogService
    ) {}
    ngOnInit(): void {
      this.getAllUsers(this.currentPage, this.rows);
    }
    onPageChange(event: any): void {
      this.currentPage = event.page;
      this.rows = event.rows;
      console.log('Page Change Event:', event);
      this.getAllUsers(this.currentPage, this.rows);
    }
    getActions(user: any) {
      return [
        {
          label: 'View',
          command: () => this.viewUser(user._id),
        }
      ];
    }
    
    viewUser(id: any): void {
      this.ref = this.dialogService.open(ViewUserDialogComponent, {
        header: 'View User',
        width: '50vw',
        data: { id },
      });
    }
  
    getAllUsers(page: number, size: number): void {
      this.isLoading = true;
      this._UsersService.getUsers(page + 1, size).subscribe({
        next: (response: any) => {
          this.userList = response.data.users;
          this.totalCount = response.data.totalCount;
          this.isLoading = false;
          this.loading =  false;
        },
        error: (err) => {
          this.userList = [];
          this.isLoading = false;
          this.loading =  false;
        }
      });
    }
    
    
}
