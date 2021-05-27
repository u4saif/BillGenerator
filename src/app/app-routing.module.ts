import { LoginComponent } from './dashboard/login/login.component';
import { DetailComponent } from './dashboard/detail/detail.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGardService } from './services/auth/auth-gard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:"login" ,component: LoginComponent},
  { path:"home" ,component: HomeComponent,canActivate:[AuthGardService]},
  { path:"home/details" ,component: DetailComponent,canActivate:[AuthGardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
