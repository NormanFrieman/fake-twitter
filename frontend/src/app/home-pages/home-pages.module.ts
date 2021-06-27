import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/shared-components.module';
import { FeedComponent } from './feed/feed.component';



@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  declarations: [
    FeedComponent
  ]
})
export class HomePagesModule { }
