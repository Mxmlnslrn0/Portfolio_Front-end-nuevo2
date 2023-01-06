import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { AcercaDeModalComponent } from "./component/acerca-de/acerca-de-modal.component";
import { EditEducacionComponent } from "./component/educacion/edit-educacion.component";
import { EducacionModalComponent } from "./component/educacion/educacion-modal.component";
import { HeaderModalComponent } from "./component/header/header-modal.component";



const routes: Routes = [   
    {path:'login', component: HeaderModalComponent},
    {path:'usuario/:id', component: AcercaDeModalComponent},
    {path:'educacion', component: EducacionModalComponent},
    {path: 'editEduc/:id', component: EditEducacionComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }