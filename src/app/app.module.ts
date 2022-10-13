import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewAirlineComponent } from './view-airline/view-airline.component';
import { ViewPassComponent } from './view-pass/view-pass.component';

const routes:Routes=[
  {

  }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewAirlineComponent,
    ViewPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
