import { StorageService } from 'src/core/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../interface/card';
import { LandingService } from '../../services/landing.service';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  rooms: Card[] = [];

  constructor(
    private _LandingService: LandingService,
    private dialogService: DialogService,
    private StorageService: StorageService ,
    private _Router:Router
  ) {}


goToDetails(id: string) {
  this._Router.navigate(['/landing/content', id]);  // تأكد من المسار الي عامله
}
  ngOnInit() {
    this._LandingService.getAvailableRooms().subscribe((res) => {
      this.rooms = res;
    });
  }
  checkAuth() {
    if (this.StorageService.isLogged === true) {
      //write fav api
      return ;
    } else {
      this.dialogService.open(AuthDialogComponent, {
        header: '',
        width: '30vw',
      });
    }
  }
}
