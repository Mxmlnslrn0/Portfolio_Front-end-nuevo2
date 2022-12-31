import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/models/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
proyectoList:any;
proyecto : proyecto[] = [];
 
  constructor( private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoService.lista().subscribe(data =>{this.proyecto = data;})
  }

}
