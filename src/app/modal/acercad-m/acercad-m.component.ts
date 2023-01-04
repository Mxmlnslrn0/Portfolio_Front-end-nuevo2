import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/models/acerca-de.model';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-acercad-m',
  templateUrl: './acercad-m.component.html',
  styleUrls: ['./acercad-m.component.css']
})
export class AcercadMComponent implements OnInit {

  public show = false;
  
  nombreUsu: String = '';
  oficioUsu: String ='';
  descripUsu: String='';
  constructor(private acercaDeService : AcercaDeService, private router: Router) {
   }

  ngOnInit(): void {
  }

  onCreate():void{
    const Usuario = new usuario(this.nombreUsu, this.oficioUsu, this.descripUsu);
      this.acercaDeService.guardar(Usuario).subscribe(
        data=>{
          alert("Usuario añadido");
          this.router.navigate(['']);
        }, err =>{
          alert("Falló");
          this.router.navigate(['']);
        }
      )
    }

    mostrarModal(){
      this.show = true;
    }

    ocultarModal(){
      this.show = false;
    }
}
