import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-crear-educacion',
  templateUrl: './crear-educacion.component.html',
  styleUrls: ['./crear-educacion.component.css']
})
export class CrearEducacionComponent implements OnInit {
  nombreEdu: string = '';
  carreraEdu: string = '';
  descripEdu: string = '';
  constructor(private educaService : EducacionService , private router: Router) { }

  ngOnInit(): void {
  }

  crear(): void {
    const edu = new Educacion(this.nombreEdu, this.carreraEdu, this.descripEdu);
    this.educaService.guardar(edu).subscribe(
      data =>{
        alert("Educación añadida");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
