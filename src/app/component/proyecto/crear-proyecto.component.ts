import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {
 form: FormGroup;

  constructor(private proService: ProyectoService, 
              private router: Router,
              private formBuilder: FormBuilder
) {
  this.form = this.formBuilder.group({
      idPro:['',[Validators.required]],
      nombrePro:['',[Validators.required]],
      descripPro:['',[Validators.required]]
  })
 }

  ngOnInit(): void {
  }
  crear(): void {
    const edu = this.form.value;
    this.proService.guardar(edu).subscribe(
      data =>{
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al crear el Proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
