import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

proyecto = [
  {nombre: 'nombre del proyecto',
   fecha: '00/00/0000',
   descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam'},
   {nombre: 'nombre del proyecto 2',
   fecha: '00/00/0000 2',
   descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam 2'},
   {nombre: 'nombre del proyecto 3',
   fecha: '00/00/0000 3',
   descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam 3'},
]

  constructor() { }

  ngOnInit(): void {
  }

}
