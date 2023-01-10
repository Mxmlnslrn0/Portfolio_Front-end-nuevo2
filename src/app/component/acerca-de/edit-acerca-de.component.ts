import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from 'src/app/models/acerca-de.model';
import { AcercaDeService } from 'src/app/service/acerca-de.service';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
usua: usuario = new usuario("", "", "", "");
  constructor(private usuService: AcercaDeService, 
              private acroute:ActivatedRoute, 
              private route: Router,
              public imgService: ImagenesService) { }

  ngOnInit(): void {
    const id = this.acroute.snapshot.params['id'];
    this.usuService.porId(id).subscribe(
      data => {
        this.usua = data;
      }, err => {
        alert("Error al modificar el Usuario");
        this.route.navigate(['']);
      }
    )
  }

  editUsuario(): void {
    const id = this.acroute.snapshot.params['id'];
    this.usua.imgUsu = this.imgService.url
    this.usuService.cambiar(id, this.usua).subscribe(
      data => {
        alert("Usuario modificado");
        this.route.navigate([''])
      }, err => {
        alert("Error al modificar el Usuario");
        this.route.navigate(['']);
      }
    )
  }


  subirImagen($event:any){
    const id = this.acroute.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imgService.subirImagenes($event, name);
  }
}
