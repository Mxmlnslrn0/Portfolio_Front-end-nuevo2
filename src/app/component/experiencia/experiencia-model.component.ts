import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experiencia } from 'src/app/models/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia-model',
  templateUrl: './experiencia-model.component.html',
  styleUrls: ['./experiencia-model.component.css']
})
export class ExperienciaModelComponent implements OnInit {

  expLab: experiencia = null;

  Experiencia: experiencia[] = [];

  empleoExp: String = '';
  puestoExp: String = '';
  descripExp: String = '';

  constructor(private expeService : ExperienciaService , private router: Router, private acrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.expeService.lista().subscribe(data => { this.Experiencia=data});

    /*const id = this.acrouter.snapshot.params['id'];
    this.acercaDeService.porId(id).subscribe(
      data =>{
        this.usuLab = data;
      }, err =>{
        alert("error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )*/

    /*onEdit(): any{
      const id = this.acrouter.snapshot.params['id'];
          this.expeService.editar(id, this.expLab).subscribe(
        data=>{
          alert("Usuario modificado");
          this.router.navigate([""]);
        }, err =>{
          alert("Falló");
          this.router.navigate([""]);
        }
      ) 
    }*/
  
  }

}
