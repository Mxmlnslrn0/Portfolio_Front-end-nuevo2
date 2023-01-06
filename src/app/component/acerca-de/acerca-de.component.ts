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
  
  constructor(public acercaDeService: AcercaDeService) { }

  ngOnInit(): void {
    this.acercaDeService.getUsuario().subscribe(data =>{this.usuario = data})
  }
}
