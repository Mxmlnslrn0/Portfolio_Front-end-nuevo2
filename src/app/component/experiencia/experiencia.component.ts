import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/models/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experienciaList:any;
experiencia: experiencia[] = [];
  
  constructor(private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.lista().subscribe(data =>{this.experiencia = data;})
  }

}
