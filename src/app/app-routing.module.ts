import { DetailComponent } from './dashboard/detail/detail.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:"home" ,component: HomeComponent},
  { path:"home/details" ,component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
