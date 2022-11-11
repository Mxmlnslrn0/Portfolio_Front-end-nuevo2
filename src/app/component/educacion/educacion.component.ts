import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  estudios = [{
    establecimiento: 'Nombre del Instituto',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam.',
    carrera: 'carrera',
    periodo: '00/00/0000 - 00/00/0000',
    imagen: 'assets/images/instituto1.jpg'},
    {
    establecimiento: 'Nombre del instituto 2',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam 2.',
    carrera: 'carrera 2',
    periodo: '00/00/0000 - 00/00/0000 2',
    imagen: 'assets/images/instituto2.jpg'},
    {
    establecimiento: 'Nombre del instituto 3',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam 3.',
    carrera: 'carrera 3',
    periodo: '00/00/0000 - 00/00/0000 3',
    imagen: 'assets/images/instituto3.jpg'},]

  constructor() { }

  ngOnInit(): void {
  }

}
