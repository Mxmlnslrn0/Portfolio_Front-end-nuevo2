import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from 'src/app/models/acerca-de.model';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-acerca-de-modal',
  templateUrl: './acerca-de-modal.component.html',
  styleUrls: ['./acerca-de-modal.component.css']
})
export class AcercaDeModalComponent implements OnInit {

  usuLab: usuario = null;

  constructor(private acercaDeService : AcercaDeService, private router: Router, private acrouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.acrouter.snapshot.params['id'];
    this.acercaDeService.porId(id).subscribe(
      data =>{
        this.usuLab = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }
  onEdit(): any{
    const id = this.acrouter.snapshot.params['id'];
        this.acercaDeService.cambiar(id, this.usuLab).subscribe(
      data=>{
        alert("Usuario modificado");
        this.router.navigate([""]);
      }, err =>{
        alert("Falló");
        this.router.navigate([""]);
      }
    ) 
  }

  

}
