import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavItemsComponent } from './fav-items.component';

const routes: Routes = [{ path: '', component: FavItemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavItemsRoutingModule { }
