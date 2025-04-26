import { Component, OnInit } from '@angular/core';
import { LandingService } from 'src/app/landing/services/landing.service';
import { Card } from '../../../interface/card';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
    rooms: Card[] = [];
constructor (
  private _LandingService:LandingService
){}
  ngOnInit(): void {
    this._LandingService.getExploreRooms().subscribe((res) =>{
      this.rooms = res;
  });
}
}
