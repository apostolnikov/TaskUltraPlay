import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MatchMarketsComponent } from './components/match-markets/match-markets.component';


import { DataService } from './services/data.service';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'match', component: MatchMarketsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchMarketsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
