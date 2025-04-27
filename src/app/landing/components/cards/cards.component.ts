import { Component, OnInit } from '@angular/core';
import { Card } from '../../interface/card';
import { LandingService } from '../../services/landing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  rooms: Card[] = [];
constructor(
  private _LandingService:LandingService,
  private _Router:Router
) { }

ngOnInit() {
  this._LandingService.getAvailableRooms().subscribe((res) => {
    this.rooms = res;
  });
}


goToDetails(id: string) {
  this._Router.navigate(['/landing/content', id]);  // تأكد من المسار الي عامله
}
}
