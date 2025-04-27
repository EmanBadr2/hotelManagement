import { FavoriteRoom } from './../../interface/fav';
import { Component, OnInit } from '@angular/core';
import { Ads } from '../../interface/card';
import { LandingService } from '../../services/landing.service';
import { ToastrService } from 'ngx-toastr';

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
  private toastr: ToastrService
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

}
