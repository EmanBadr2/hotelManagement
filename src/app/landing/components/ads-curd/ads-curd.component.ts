import { Component, OnInit } from '@angular/core';
import { Ads } from '../../interface/curd';
import { LandingService } from '../../services/landing.service';
import { FACILITY_MAP } from '../../interface/facility-map';

@Component({
  selector: 'app-ads-curd',
  templateUrl: './ads-curd.component.html',
  styleUrls: ['./ads-curd.component.scss']
})
export class AdsCurdComponent implements OnInit {
  ads: Ads[] = [];
  facilityMap = FACILITY_MAP;
constructor (
  private _LandingService:LandingService,
) { }

ngOnInit(): void {
this._LandingService.getAdsAll().subscribe((res) => {
  this.ads = res
})
}

}
