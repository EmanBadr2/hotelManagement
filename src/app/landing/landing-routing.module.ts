import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { DetailsPageComponent } from './modules/details-page/details-page.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo:'landing'  , pathMatch:'full'},
  { path: 'landing', component: LandingComponent },
  { path: 'pageDetails', component: DetailsPageComponent },
  {path:'userDetails/:id',component:UserComponent},
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
