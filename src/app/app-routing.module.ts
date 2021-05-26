import { LoginComponent } from './dashboard/login/login.component';
import { DetailComponent } from './dashboard/detail/detail.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:"login" ,component: LoginComponent},
  { path:"home" ,component: HomeComponent},
  { path:"home/details" ,component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
