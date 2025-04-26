import { Component, OnInit } from '@angular/core';
import { Card } from '../../interface/card';
import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  rooms: Card[] = [];
constructor(private _LandingService:LandingService) { }

ngOnInit() {
  this._LandingService.getAvailableRooms().subscribe((res) => {
    this.rooms = res;
  });
}

}
