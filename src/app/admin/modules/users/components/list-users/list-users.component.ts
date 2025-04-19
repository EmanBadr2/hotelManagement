import { Component } from '@angular/core';
import { DialogAddComponent } from 'src/app/admin/components/shared/dialog-add-edit/dialog-add.component';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
// import { IRooms } from '../../../rooms/interfaces/IRooms';
import { UsersService } from '../../services/users.service';
import { ViewUserDialogComponent } from '../view-user-dialog/view-user-dialog.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {
  userList: any[] = [];
  // roomsList: IRooms[] | undefined = [];
  totalCount: number = 0;
  isLoading: boolean = false;
  error: string = '';
  ref!: DynamicDialogRef;
    constructor(
      private _UsersService: UsersService,
      private dialogService: DialogService
    ) {}
    ngOnInit(): void {
      this.getAllUsers();
    }
    getActions(user: any) {
      return [
        {
          label: 'View',
          icon: 'pi pi-eye',
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
  
    getAllUsers(): void {
      this.isLoading = true;
      this._UsersService.getUsres().subscribe({
        next: (response: any) => {
          this.userList = response.data.users;
          this.totalCount = response.data.users.length;
          this.isLoading = false;
        },
        error: (err) => {
          this.userList = [];
          this.isLoading = false;
        }
      });
    }
    
    
}
