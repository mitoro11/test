import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { HomeComponent } from './pages/home/home.component';
import { TournoisComponent } from './pages/tournois/tournois.component';
import { LayoutComponent } from './pages/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    HomeComponent,
    TournoisComponent,
    LayoutComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
