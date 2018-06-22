import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { SigninMainComponent } from './signin-main/signin-main.component';
import { WellcomeComponent } from './wellcome/wellcome.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'telephone', component: TelephoneComponent },
  { path: 'signin-main', component: SigninMainComponent},
  { path: 'wellcome', component: WellcomeComponent},

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
