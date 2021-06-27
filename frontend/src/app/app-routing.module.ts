import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePagesRouting } from './home-pages/home-page.routing';
import { InitialPagesRouting } from './initial-pages/initial-pages.routing';

@NgModule({
  imports: [InitialPagesRouting, HomePagesRouting],
  exports: [RouterModule]
})

export class AppRoutingModule { }
