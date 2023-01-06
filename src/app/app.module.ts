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
import { HeaderModalComponent } from './component/header/header-modal.component';
import { EducacionModalComponent } from './component/educacion/educacion-modal.component';
import { ExperienciaModelComponent } from './component/experiencia/experiencia-model.component';
import { EditEducacionComponent } from './component/educacion/edit-educacion.component';







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
    HeaderModalComponent,
    EducacionModalComponent,
    ExperienciaModelComponent,
    EditEducacionComponent,


   
  
  
    
  



    
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
