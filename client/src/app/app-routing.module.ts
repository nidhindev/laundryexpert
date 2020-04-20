import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStatusComponent } from './get-status/get-status.component';
import {AddComponent} from './add/add.component'
const routes: Routes = [
  { path: 'search', component: GetStatusComponent },
  { path: 'add', component: AddComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
