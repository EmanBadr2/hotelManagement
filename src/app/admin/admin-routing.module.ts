import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChangePasswordModule } from './modules/change-password/change-password.module';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'rooms', loadChildren: () => import('./modules/rooms/rooms.module').then(m => m.RoomsModule) },
      { path: 'facilities', loadChildren: () => import('./modules/facilities/facilities.module').then(m => m.FacilitiesModule) },
      { path: 'Ads', loadChildren: () => import('./modules/ads/ads.module').then(m => m.AdsModule) },
      { path: 'booking', loadChildren: () => import('./modules/booking/booking.module').then(m => m.BookingModule) },

      { path: 'changepassword', loadChildren: () => import('./modules/change-password/change-password.module').then(m => m.ChangePasswordModule) },


      { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
