import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/models/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-crear-experiencia',
  templateUrl: './crear-experiencia.component.html',
  styleUrls: ['./crear-experiencia.component.css']
})
export class CrearExperienciaComponent implements OnInit {
  empleoExp: string = '';
  puestoExp: string = '';
  descripExp: string = '';
  constructor(private expeService : ExperienciaService , private router: Router) { }

  ngOnInit(): void {
  }

  crear(): void {
    const exp = new experiencia(this.puestoExp, this.empleoExp, this.descripExp);
    this.expeService.guardar(exp).subscribe(
      data =>{
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
