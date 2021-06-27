import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesRouting } from './homePages/homepages-routing.module';

@NgModule({
  imports: [HomePagesRouting],
  exports: [RouterModule]
})

export class AppRoutingModule { }
