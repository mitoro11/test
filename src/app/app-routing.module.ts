import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { HomeComponent } from './pages/home/home.component';
import { TournoisComponent } from './pages/tournois/tournois.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
      {path: '', component: LayoutComponent,
    children: [
         { path: '', component: HomeComponent },
         {path: 'leagues', component: LeaguesComponent},
         {path: 'tournois', component: TournoisComponent}
        ]
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }