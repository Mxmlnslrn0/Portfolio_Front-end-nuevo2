import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

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
import { EditEducacionComponent } from './component/educacion/edit-educacion.component';
import { EditExperienciaComponent } from './component/experiencia/edit-experiencia.component';
import { CrearEducacionComponent } from './component/educacion/crear-educacion.component';
import { CrearExperienciaComponent } from './component/experiencia/crear-experiencia.component';
import { CrearProyectoComponent } from './component/proyecto/crear-proyecto.component';
import { EditProyectoComponent } from './component/proyecto/edit-proyecto.component';
import { CrearHabilidadComponent } from './component/habilidades/crear-habilidad.component';
import { EditHabilidadComponent } from './component/habilidades/edit-habilidad.component';
import { LoginComponent } from './component/header/login.component';
import { EditAcercaDeComponent } from './component/acerca-de/edit-acerca-de.component';
import { FooterComponent } from './component/footer/footer.component';








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
    EditEducacionComponent,
    EditExperienciaComponent,
    CrearEducacionComponent,
    CrearExperienciaComponent,
    CrearProyectoComponent,
    EditProyectoComponent,
    CrearHabilidadComponent,
    EditHabilidadComponent,
    LoginComponent,
    EditAcercaDeComponent,
    FooterComponent,




   
  
  
    
  



    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
