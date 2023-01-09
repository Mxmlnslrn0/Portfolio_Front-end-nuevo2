import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion.model';
import { AuthService } from 'src/app/service/auth.service';
import { EducacionService } from 'src/app/service/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor(private educacionService: EducacionService, public authService: AuthService) { }

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion(): void {
    this.educacionService.lista().subscribe(data => { this.educacion = data });
  }

  borrarEdu(id: number): void {
    if (id != undefined) {
      this.educacionService.eliminar(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar")
        })
    }
  }
}
