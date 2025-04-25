import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'explore', loadChildren: () => import('./modules/explore/explore.module').then(m => m.ExploreModule) },
  { path: 'booking', loadChildren: () => import('./modules/booking/booking.module').then(m => m.BookingModule) },
  { path: 'fav-items', loadChildren: () => import('./modules/fav-items/fav-items.module').then(m => m.FavItemsModule) },
  { path: 'DetailsPage', loadChildren: () => import('./modules/details-page/details-page.module').then(m => m.DetailsPageModule) } ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
