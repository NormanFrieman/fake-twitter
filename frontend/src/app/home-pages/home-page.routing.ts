import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeedComponent } from "./feed/feed.component";

const routes: Routes = [
    {
        path: 'feed', component: FeedComponent
    },
    {
        path: '', redirectTo: '/feed', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class HomePagesRouting { };