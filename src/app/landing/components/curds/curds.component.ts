import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../services/landing.service';
import { Curd } from '../../interface/curd';

@Component({
  selector: 'app-curds',
  templateUrl: './curds.component.html',
  styleUrls: ['./curds.component.scss']
})
export class CurdsComponent implements OnInit {
  rooms: Curd[] = [];
constructor(private _LandingService:LandingService) { }

ngOnInit() {
  this._LandingService.getAvailableRooms().subscribe((res) => {
    this.rooms = res;
  });
}

}
