import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LandingService } from 'src/app/landing/services/landing.service';
import { FavoriteRoom, FavoriteRoomResponse } from '../../interface/fav';

@Component({
  selector: 'app-fav-items',
  templateUrl: './fav-items.component.html',
  styleUrls: ['./fav-items.component.scss']
})
export class FavItemsComponent implements OnInit  {
favoriteRooms: FavoriteRoom[] = []; 
isLoading: boolean = true;
isRoomsEmpty: boolean = false;
constructor (private _LandingService:LandingService,
  private toastr: ToastrService
){}
ngOnInit(): void {
  this._LandingService.getAllFavRooms().subscribe((res) => {
    this.favoriteRooms = res.data.favoriteRooms;
    this.isLoading = false;
    this.isRoomsEmpty = this.favoriteRooms.every(fav => fav.rooms.length === 0);
  })
  }
  removeFav(roomId: string) {
    this._LandingService.removeFromFav(roomId, this.favoriteRooms[0]._id).subscribe({
      next: (res) => {
        this.favoriteRooms = this.favoriteRooms.filter(fav => fav.rooms[0]._id !== roomId);
        this.toastr.success( res.message);
        this.getAllFavRooms();
      
      },
      error: (err) => {
        this.toastr.error( err.error.message);
        this.isLoading = false;
      }
    });
  }

  getAllFavRooms() {
    this._LandingService.getAllFavRooms().subscribe((res) => {
      this.favoriteRooms = res.data.favoriteRooms;    
    }); 

  }
}
