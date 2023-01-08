import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/models/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: experiencia[] = [];
  
  constructor(private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe(data => { this.experiencia = data });
  }

  borrarExp(id: number): void {
    if (id != undefined) {
      this.experienciaService.eliminar(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo eliminar")
        })
    }
  }
}
