import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { StorageService } from 'src/core/services/storage.service';
import { IUser } from '../../interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  userID :string| null = this._StorageService.userID
  userName :string| null = this._StorageService.userName
  userData !:any
   constructor(private _Router: Router ,
      private _ProfileService  : ProfileService  ,
       private _StorageService : StorageService ,
   ){}
   ngOnInit(): void {
       this.getProfile()
   }

   getProfile():void{
    this._ProfileService.onGettingProfile(this.userID , this.userName).subscribe({
      next(res) {
        console.log(res);
      },
      error(err) {
        console.log(err);
      },
    })
  }
}
