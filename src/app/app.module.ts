import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TelephoneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'dashboard', component: DashboardComponent }, { path: 'telephone', component: TelephoneComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
