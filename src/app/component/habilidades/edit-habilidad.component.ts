import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/models/habilidades.model';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {
  habi: Habilidades = null;
  constructor(private habiService:HabilidadesService, private acRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    const id = this.acRoute.snapshot.params['id'];
    this.habiService.porId(id).subscribe(
      data => {
        this.habi = data;
      }, err => {
        alert("Error al modificar la Habilidad");
        this.route.navigate(['']);
      }
    )
  }

  editHabilidad(): void {
    const id = this.acRoute.snapshot.params['id'];
    this.habiService.editar(id, this.habi).subscribe(
      data => {
        alert("Habilidad modificada")
        this.route.navigate([''])
      }, err => {
        alert("Error al modificar la Habilidad");
        this.route.navigate(['']);
      }
    )
  }
}
