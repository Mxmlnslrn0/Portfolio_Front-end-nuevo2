import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/models/habilidades.model';
import { AuthService } from 'src/app/service/auth.service';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidad: Habilidades[] = [];

  constructor(private habiService: HabilidadesService, public authService: AuthService) { }

  ngOnInit(): void {
    this.cargarHabilidad();
  }

  cargarHabilidad(): void {
    this.habiService.Lista().subscribe(data => { this.habilidad = data });
  }

  borrarHab(id: number): void {
    if (id != undefined) {
      this.habiService.eliminar(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo eliminar")
        })
    }
  }
}
