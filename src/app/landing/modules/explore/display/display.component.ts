import { Component, OnInit } from '@angular/core';
import { LandingService } from 'src/app/landing/services/landing.service';
import { Card } from '../../../interface/card';
import { DialogService } from 'primeng/dynamicdialog';
import { StorageService } from 'src/core/services/storage.service';
import { AuthDialogComponent } from 'src/app/landing/components/auth-dialog/auth-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  rooms: Card[] = [];
  rows: number = 10;
  currentPage: number = 0;
  totalCount: number = 0;
  startDate: any;
  endDate: any;
  rangeDates: any[] = [];
  capacity: number = 0;
constructor (
  private _LandingService: LandingService,
  private dialogService: DialogService,
  private StorageService: StorageService,
  private _Router: Router
){
  const navigation = this._Router.getCurrentNavigation();
  const state = navigation?.extras.state as { startDate: string, endDate: string, capacity: number };
  if (state) {
    this.startDate = state.startDate;
    this.endDate = state.endDate;
    this.capacity = state.capacity;
    this.rangeDates = [this.startDate, this.endDate];
  }
}
ngOnInit(): void {
  this.getAllrooms(this.currentPage, this.rows);
}

getAllrooms(page: number, size: number): void {
  this._LandingService.getExploreRooms(page,size,this.rangeDates[0],this.rangeDates[1]).subscribe({
    next: (response) => {
      this.rooms = response;
      this.totalCount = response.length;
    },
    error: (err) => {
      console.error(err);
    }
  });
}


goToDetails(id: string) {
  this._Router.navigate(['/landing/content', id]);
}
checkAuth() {
  if (this.StorageService.isUser === true) {
    //write fav api
    return ;
  } else {
    this.dialogService.open(AuthDialogComponent, {
      header: '',
      width: '30vw',
    });
  }
}
onPageChange(event: any): void {
  this.currentPage = event.page;
  this.rows = event.rows;
  this.getAllrooms(this.currentPage, this.rows);
}
}
