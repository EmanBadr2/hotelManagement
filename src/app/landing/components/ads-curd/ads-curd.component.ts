import { Component, OnInit } from '@angular/core';
import { Ads } from '../../interface/card';
import { LandingService } from '../../services/landing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads-curd',
  templateUrl: './ads-curd.component.html',
  styleUrls: ['./ads-curd.component.scss']
})
export class AdsCurdComponent implements OnInit {
  ads: Ads[] = [];
constructor (
  private _LandingService:LandingService,
  private _Router:Router
) { }

ngOnInit(): void {
this._LandingService.getAdsAll().subscribe((res) => {
  this.ads = res
})
}

goToDetails(id: string) {
  this._Router.navigate(['/landing/content', id]);  // تأكد من المسار الي عامله
}

}
