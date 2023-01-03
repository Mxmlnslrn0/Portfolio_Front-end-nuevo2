import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/models/acerca-de.model';
import { AcercaDeService } from 'src/app/service/acerca-de.service';





@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
miPortfolio:any;
usuario : usuario = new usuario("", "", "");
usuario2: usuario[] = [];
  
  constructor(public acercaDeService: AcercaDeService, public router:Router) { }

  ngOnInit(): void {
    this.acercaDeService.getUsuario().subscribe(data =>{this.usuario = data})
  }

  cargarUsuario():void{
    this.acercaDeService.lista().subscribe(data=> {this.usuario2 = data;})
  }

}
