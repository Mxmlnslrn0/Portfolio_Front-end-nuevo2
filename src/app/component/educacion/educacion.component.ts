import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educacionList:any;
educacion: educacion[] = [];

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.educacionService.lista().subscribe(data =>{this.educacion = data;})
  }

}
