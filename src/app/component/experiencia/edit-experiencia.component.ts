import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experiencia } from 'src/app/models/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
exp: experiencia = new experiencia("", "", "");
  constructor(private expService: ExperienciaService, private acroute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    const id = this.acroute.snapshot.params['id'];
    this.expService.porId(id).subscribe(
      data => {
        this.exp = data;
      }, err => {
        alert("Error al modificar la Experiencia");
        this.route.navigate(['']);
      }
    )
  }

  editExperiencia(): void {
    const id = this.acroute.snapshot.params['id'];
    this.expService.editar(id, this.exp).subscribe(
      data => {
        this.route.navigate([''])
      }, err => {
        alert("Error al modificar la experiencia");
        this.route.navigate(['']);
      }
    )
  }

}
