import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
educ: Educacion = new Educacion("", "", "");
  constructor(private educService: EducacionService, private acroute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    const id = this.acroute.snapshot.params['id'];
    this.educService.porId(id).subscribe(
      data => {
        this.educ = data;
      }, err => {
        alert("Error al modificar la educación");
        this.route.navigate(['']);
      }
    )
  }

  editEducacion(): void {
    const id = this.acroute.snapshot.params['id'];
    this.educService.editar(id, this.educ).subscribe(
      data => {
        alert("Educación modificada");
        this.route.navigate([''])
      }, err => {
        alert("Error al modificar la educación");
        this.route.navigate(['']);
      }
    )
  }
}
