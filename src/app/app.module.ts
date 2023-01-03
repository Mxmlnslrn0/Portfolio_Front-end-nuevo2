import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ImagenComponent } from './component/imagen/imagen.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { HabilidadesComponent } from './component/habilidades/habilidades.component';
import { ProyectoComponent } from './component/proyecto/proyecto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AcercadMComponent } from './modal/acercad-m/acercad-m.component';







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
    AcercadMComponent,
   
  
  
    
  



    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
