import { Component, OnInit } from '@angular/core';
import { Ads } from '../../interface/card';
import { LandingService } from '../../services/landing.service';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { StorageService } from 'src/core/services/storage.service';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-ads-curd',
  templateUrl: './ads-curd.component.html',
  styleUrls: ['./ads-curd.component.scss']
})
export class AdsCurdComponent implements OnInit {
  ads: Ads[] = [];
constructor (
  private _LandingService:LandingService,
  private dialogService: DialogService,
  private StorageService: StorageService ,
  private _Router:Router
) { }

ngOnInit(): void {
this._LandingService.getAdsAll().subscribe((res) => {
  this.ads = res
})
}

goToDetails(id: string) {
  this._Router.navigate(['/landing/content', id]);
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
