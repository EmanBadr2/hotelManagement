import { FavoriteRoom } from './../../interface/fav';
import { Component, OnInit } from '@angular/core';
import { Ads } from '../../interface/card';
import { LandingService } from '../../services/landing.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { StorageService } from 'src/core/services/storage.service';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-ads-curd',
  templateUrl: './ads-curd.component.html',
  styleUrls: ['./ads-curd.component.scss']
})
export class AdsCurdComponent implements OnInit {
  ads: Ads[] = [];
  FavoriteRooms: string[] = [];

constructor (
  private _LandingService:LandingService,
  private toastr: ToastrService,
  private dialogService: DialogService,
  private StorageService: StorageService ,
  private _Router:Router
) { }

ngOnInit(): void {
  // console.log(this.StorageService.userRole);

this._LandingService.getAdsAll().subscribe((res) => {
  this.ads = res
})
}
addToFav(roomId: string) {
    this._LandingService.addToFav(roomId).subscribe({
      next: (res: FavoriteRoom) => {
        this.toastr.success('Room added to favorites');
        this.FavoriteRooms.push(roomId);
        console.log(res);
      },
      error: (err) => {
        this.toastr.error('Already Added');
      }
    });
  }

goToDetails(id: string) {
  this._Router.navigate(['/landing/content', id]);
}
checkAuth(roomId : string) {
  console.log('done');
  if (localStorage.getItem('isUser') == 'true') {
    this.addToFav(roomId);
    // this._Router.navigate(['/landing/fav-items'])
    // return;
  } else {
    this.dialogService.open(AuthDialogComponent, {
      header: '',
      width: '30vw',
    });
  }
}




}
