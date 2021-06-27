import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginScreenComponent } from "./login-screen/login-screen.component";
import { RegisterScreenComponent } from "./register-screen/register-screen.component";

const routes: Routes = [
    {
        path: 'login', component: LoginScreenComponent
    },
    {
        path: 'register', component: RegisterScreenComponent
    },
    {
        path: '', redirectTo: '/register', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class InitialPagesRouting { };