import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',
  styleUrls: ['./educacion-modal.component.css']
})
export class EducacionModalComponent implements OnInit {
nombreEd: string = '';
carreraEdu: string = '';
descripEdu: string = '';

  constructor(private educaService : EducacionService , private router: Router) { }

  ngOnInit(): void {
    
  }

  crear(): void {
    const edu = new Educacion(this.nombreEd, this.carreraEdu, this.descripEdu);
    this.educaService.guardar(edu).subscribe(
      data =>{
        alert("Educación añadida");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
