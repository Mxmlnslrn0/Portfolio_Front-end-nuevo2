import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyecto } from 'src/app/models/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {
  nombrePro: string = '';
  //fechaPro: string = '';
  descripPro: string = '';
  constructor(private proService : ProyectoService , private router: Router) { }

  ngOnInit(): void {
  }
  crear(): void {
    const edu = new proyecto(this.nombrePro, //this.fechaPro, 
    this.descripPro);
    this.proService.guardar(edu).subscribe(
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
