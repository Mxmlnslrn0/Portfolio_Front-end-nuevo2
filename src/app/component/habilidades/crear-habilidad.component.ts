import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/models/habilidades.model';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-crear-habilidad',
  templateUrl: './crear-habilidad.component.html',
  styleUrls: ['./crear-habilidad.component.css']
})
export class CrearHabilidadComponent implements OnInit {
  nombreHab: string = '';
  porcentajeHab: number = null;
  constructor(private habiService : HabilidadesService , private router: Router) { }

  ngOnInit(): void {
  }

  crear(): void {
    const edu = new Habilidades(this.nombreHab,  this.porcentajeHab);
    this.habiService.guardar(edu).subscribe(
      data =>{
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
