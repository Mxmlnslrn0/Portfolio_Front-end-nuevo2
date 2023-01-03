import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { AcercaDeComponent } from "./component/acerca-de/acerca-de.component";
import { AcercadMComponent } from "./modal/acercad-m/acercad-m.component";


const routes: Routes = [
    {path:'', component: AcercaDeComponent},
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }