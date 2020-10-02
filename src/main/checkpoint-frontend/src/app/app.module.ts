import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';
import { HeaderComponent } from './components/header/header.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowseComponent,
    HeaderComponent,
    UpcomingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
