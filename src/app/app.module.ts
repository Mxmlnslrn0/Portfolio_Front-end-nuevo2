import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat'


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ImagenComponent } from './component/imagen/imagen.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { HabilidadesComponent } from './component/habilidades/habilidades.component';
import { ProyectoComponent } from './component/proyecto/proyecto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AcercaDeModalComponent } from './component/acerca-de/acerca-de-modal.component';
import { EditEducacionComponent } from './component/educacion/edit-educacion.component';
import { EditExperienciaComponent } from './component/experiencia/edit-experiencia.component';
import { CrearEducacionComponent } from './component/educacion/crear-educacion.component';
import { CrearExperienciaComponent } from './component/experiencia/crear-experiencia.component';
import { CrearProyectoComponent } from './component/proyecto/crear-proyecto.component';
import { EditProyectoComponent } from './component/proyecto/edit-proyecto.component';
import { CrearHabilidadComponent } from './component/habilidades/crear-habilidad.component';
import { EditHabilidadComponent } from './component/habilidades/edit-habilidad.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImagenComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectoComponent,
    AcercaDeModalComponent,
    EditEducacionComponent,
    EditExperienciaComponent,
    CrearEducacionComponent,
    CrearExperienciaComponent,
    CrearProyectoComponent,
    EditProyectoComponent,
    CrearHabilidadComponent,
    EditHabilidadComponent,



   
  
  
    
  



    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
