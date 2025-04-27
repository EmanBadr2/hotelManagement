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
        this.toastr.error(err.error.message);
      }
    });
  }

goToDetails(id: string) {
  this._Router.navigate(['/landing/content', id]);
}


checkAuth(roomId : string) {
  if (this.StorageService.isLogged === true) {
    this.addToFav(roomId); 
  } else {
    this.dialogService.open(AuthDialogComponent, {
      header: '',
      width: '30vw',
    });
  }
}
}
