import { Component, OnInit } from '@angular/core';
import { Ads } from '../../interface/card';
import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'app-ads-curd',
  templateUrl: './ads-curd.component.html',
  styleUrls: ['./ads-curd.component.scss']
})
export class AdsCurdComponent implements OnInit {
  ads: Ads[] = [];
constructor (
  private _LandingService:LandingService,
) { }

ngOnInit(): void {
this._LandingService.getAdsAll().subscribe((res) => {
  this.ads = res
})
}

}
