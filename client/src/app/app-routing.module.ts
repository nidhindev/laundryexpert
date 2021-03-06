import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStatusComponent } from './get-status/get-status.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import {LaundryexpertComponent} from './laundryexpert/laundryexpert.component';
const routes: Routes = [
  { path: 'search', component: GetStatusComponent },
  { path: 'laundryexpert', component: LaundryexpertComponent },
  { path: 'add', component: AddComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'add', redirectTo: '/add', pathMatch: 'full' },
  { path: 'search', redirectTo: '/search', pathMatch: 'full' },
  { path: 'laundryexpert', redirectTo: '/laundryexpert', pathMatch: 'full' },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
