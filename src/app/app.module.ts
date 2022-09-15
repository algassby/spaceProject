import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { SpaceLaunchUpcomingComponent } from './space-launch-upcoming/space-launch-upcoming.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { SingleLauchUpComingComponent } from './single-lauch-up-coming/single-lauch-up-coming.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ErrorNotfoundDetailsComponent } from './error-notfound-details/error-notfound-details.component';
import { HomePageComponent } from './home-page/home-page.component';




@NgModule({
  declarations: [
    AppComponent,
    SpaceLaunchUpcomingComponent,
    SingleLauchUpComingComponent,
    NotFoundPageComponent,
    ErrorNotfoundDetailsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
