import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './homePages/login-screen/login-screen.component';
import { RegisterScreenComponent } from './homePages/register-screen/register-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegisterScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
