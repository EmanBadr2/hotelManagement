import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFacilitiesComponent } from './components/list-facilities/list-facilities.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch:'full' } ,
  { path: 'list', component: ListFacilitiesComponent } ,
  { path: 'add-edit', component: AddEditComponent } ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitiesRoutingModule { }
