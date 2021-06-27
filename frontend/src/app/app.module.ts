import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePagesModule } from './home-pages/home-pages.module';
import { InitialPagesModule } from './initial-pages/initial-pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InitialPagesModule,
    HomePagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
