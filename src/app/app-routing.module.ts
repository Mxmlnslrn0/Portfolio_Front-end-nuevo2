import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { AcercaDeModalComponent } from "./component/acerca-de/acerca-de-modal.component";
import { EditEducacionComponent } from "./component/educacion/edit-educacion.component";
import { CrearEducacionComponent } from "./component/educacion/crear-educacion.component";
import { CrearExperienciaComponent } from "./component/experiencia/crear-experiencia.component";
import { EditExperienciaComponent } from "./component/experiencia/edit-experiencia.component";
import { CrearProyectoComponent } from "./component/proyecto/crear-proyecto.component";
import { EditProyectoComponent } from "./component/proyecto/edit-proyecto.component";



const routes: Routes = [
    { path: 'usuario/:id', component: AcercaDeModalComponent },
    { path: 'educacion', component: CrearEducacionComponent },
    { path: 'editEduc/:id', component: EditEducacionComponent },
    { path: 'experiencia', component: CrearExperienciaComponent},
    { path: 'editExpe/:id', component: EditExperienciaComponent },
    { path: 'proyecto', component: CrearProyectoComponent},
    { path: 'editPro/:id', component: EditProyectoComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }