import { StorageService } from 'src/core/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../interface/card';
import { LandingService } from '../../services/landing.service';
import { FavoriteRoom } from '../../interface/fav';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  rooms: Card[] = [];
  FavoriteRooms: string[] = [];
  constructor(
    private _LandingService: LandingService,
    private dialogService: DialogService,
    private StorageService: StorageService ,
    private _Router:Router,
    private toastr: ToastrService
  ) {}
ngOnInit() {
  this._LandingService.getAvailableRooms().subscribe((res) => {
    this.rooms = res;
  });
}
addToFav(roomId: string) {
    this._LandingService.addToFav(roomId).subscribe({
      next: (res: FavoriteRoom) => {
        this.toastr.success('Room added to favorites');
        this.FavoriteRooms.push(roomId);
        console.log(res);
      },
      error: (err) => {
        this.toastr.error(err.error.message)
        // this.toastr.error('Already Added');
      }
    });
  }




goToDetails(id: string) {
  this._Router.navigate(['/landing/content', id]);
}

  checkAuth(roomId : string) {
    if (localStorage.getItem('isUser') == 'true'){
      this.addToFav(roomId);
      // this._Router.navigate(['/landing/fav-items'])
      return;
    } else {
      this.dialogService.open(AuthDialogComponent, {
        header: '',
        width: '30vw',
      });
    }
  }
}
