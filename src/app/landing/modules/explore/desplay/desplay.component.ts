import { Component, OnInit } from '@angular/core';
import { LandingService } from 'src/app/landing/services/landing.service';
import { Curd } from './../../../interface/curd';

@Component({
  selector: 'app-desplay',
  templateUrl: './desplay.component.html',
  styleUrls: ['./desplay.component.scss']
})
export class DesplayComponent implements OnInit {
    rooms: Curd[] = [];
constructor (
  private _LandingService:LandingService
){}
  ngOnInit(): void {
    this._LandingService.getExploreRooms().subscribe((res) =>{
      this.rooms = res;
  });
}
}
