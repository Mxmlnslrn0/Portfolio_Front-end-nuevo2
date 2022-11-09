import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ImagenComponent } from './component/imagen/imagen.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImagenComponent,
    AcercaDeComponent,
    ExperienciaComponent,
  
    
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
