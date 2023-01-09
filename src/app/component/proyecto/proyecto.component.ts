import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/models/proyecto.model';
import { AuthService } from 'src/app/service/auth.service';
import { ProyectoService } from 'src/app/service/proyecto.service';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyecto : proyecto[] = [];
 
  constructor( private proyectoService: ProyectoService, public authService: AuthService) { }

  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto(): void {
    this.proyectoService.lista().subscribe(data => { this.proyecto = data });
  }

  borrarPro(id: number): void {
    if (id != undefined) {
      this.proyectoService.borrar(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo eliminar")
        })
    }
  }
}
