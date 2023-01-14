import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-crear-habilidad',
  templateUrl: './crear-habilidad.component.html',
  styleUrls: ['./crear-habilidad.component.css']
})
export class CrearHabilidadComponent implements OnInit {

  isEnviado: boolean = false;
  form: FormGroup;

  constructor(private habiService: HabilidadesService,
    private router: Router,
    private formBuilder: FormBuilder,

  ) {
    this.form = this.formBuilder.group({
      idHab: ['', [Validators.required]],
      nombreHab: ['', [Validators.required]],
      porcentajeHab: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  crear(): void {
    const edu = this.form.value;
    this.isEnviado = true;
    this.habiService.guardar(edu).subscribe(
      data => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
