import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { EditEducacionComponent } from "./component/educacion/edit-educacion.component";
import { CrearEducacionComponent } from "./component/educacion/crear-educacion.component";
import { CrearExperienciaComponent } from "./component/experiencia/crear-experiencia.component";
import { EditExperienciaComponent } from "./component/experiencia/edit-experiencia.component";
import { CrearProyectoComponent } from "./component/proyecto/crear-proyecto.component";
import { EditProyectoComponent } from "./component/proyecto/edit-proyecto.component";
import { CrearHabilidadComponent } from "./component/habilidades/crear-habilidad.component";
import { EditHabilidadComponent } from "./component/habilidades/edit-habilidad.component";
import { LoginComponent } from "./component/header/login.component";
import { EditAcercaDeComponent } from "./component/acerca-de/edit-acerca-de.component";



const routes: Routes = [
    { path: 'login', component:LoginComponent},
    { path: 'educacion', component: CrearEducacionComponent },
    { path: 'editEduc/:id', component: EditEducacionComponent },
    { path: 'experiencia', component: CrearExperienciaComponent},
    { path: 'editExpe/:id', component: EditExperienciaComponent },
    { path: 'proyecto', component: CrearProyectoComponent},
    { path: 'editPro/:id', component: EditProyectoComponent},
    { path: 'habilidad', component: CrearHabilidadComponent},
    { path: 'editHabi/:id', component:EditHabilidadComponent},
    { path: 'editUsuario/:id', component:EditAcercaDeComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }