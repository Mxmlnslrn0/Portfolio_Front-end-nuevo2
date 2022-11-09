import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  trabajo = [{
    empleo: 'Nombre del empleo',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam.',
    puesto: 'puesto',
    periodo: '00/00/0000 - 00/00/0000'},
    {
    empleo: 'Nombre del empleo 2',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam 2.',
    puesto: 'puesto 2',
    periodo: '00/00/0000 - 00/00/0000 2'},
    {
      empleo: 'Nombre del empleo 3',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam 3.',
    puesto: 'puesto 3',
    periodo: '00/00/0000 - 00/00/0000 3'},]
  constructor() { }

  ngOnInit(): void {
  }

}
