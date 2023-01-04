import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { AcercaDeComponent } from "./component/acerca-de/acerca-de.component";
import { LoginComponent } from "./modal/login/login.component";



const routes: Routes = [
    {path:'', component: AcercaDeComponent},
    {path:'login', component: LoginComponent},
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }