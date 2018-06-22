import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TelephoneComponent } from './telephone/telephone.component';

import { SigninMainComponent } from './signin-main/signin-main.component';

import { AppRoutingModule } from './/app-routing.module';
import { WellcomeComponent } from './wellcome/wellcome.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TelephoneComponent,
    SigninMainComponent,
    WellcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
