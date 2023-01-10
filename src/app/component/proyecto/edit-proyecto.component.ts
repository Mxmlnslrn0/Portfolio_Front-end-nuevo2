import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/models/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
 pro: proyecto = new proyecto("", "");
  constructor(private proService: ProyectoService, private acroute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    const id = this.acroute.snapshot.params['id'];
    this.proService.porId(id).subscribe(
      data => {
        this.pro = data;
      }, err => {
        alert("Error al modificar el Proyecto");
        this.route.navigate(['']);
      }
    )
  }

  editProyecto(): void {
    const id = this.acroute.snapshot.params['id'];
    this.proService.editar(id, this.pro).subscribe(
      data => {
        alert("Proyecto modificado")
        this.route.navigate([''])
      }, err => {
        alert("Error al modificar el Proyecto");
        this.route.navigate(['']);
      }
    )
  }

}
