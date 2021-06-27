import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';



@NgModule({
  declarations: [
    LoginScreenComponent,
    RegisterScreenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginScreenComponent,
    RegisterScreenComponent
  ]
})
export class InitialPagesModule { }
