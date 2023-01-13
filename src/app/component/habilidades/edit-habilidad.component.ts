import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/models/habilidades.model';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {
 habi: Habilidades = new Habilidades("", 0);

 form:FormGroup
  constructor(private habiService:HabilidadesService, 
              private acRoute: ActivatedRoute, 
              private route: Router,
              private formBuilder: FormBuilder,
) {
    this.form = this.formBuilder.group({
      idHab:['', [Validators.required]],
      nombreHab: ['',[Validators.required]],
      porcentajeHab: ['',[Validators.required]]
    })
    }

  ngOnInit(): void {
    const id = this.acRoute.snapshot.params['id'];
    this.habiService.porId(id).subscribe(
      data => {
        this.form.setValue(data)
      }, err => {
        alert("Error al modificar la Habilidad");
        this.route.navigate(['']);
      }
    )
  }

  editar() {
    const exp = this.form.value;
    const id = this.acRoute.snapshot.params['id'];
    this.habiService.editar(id, exp).subscribe(
      data => {
        alert("Experiencia modificada");
        this.route.navigate(['']);
      }, err => {
        alert("Error al modificar la Experiencia");
        this.route.navigate(['']);
      }
    )
  }
}
