import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LeaguesComponent } from './bouton-first-page/leagues/leagues.component';
import { HomeComponent } from './home/home.component';
import { TournoisComponent } from './pages/tournois/tournois.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    HomeComponent,
    TournoisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
