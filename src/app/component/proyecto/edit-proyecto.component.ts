import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  
  form: FormGroup;
  isEnviado: boolean = false;

  constructor(private proService: ProyectoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private acroute: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      idPro: ['', [Validators.required]],
      nombrePro: ['', [Validators.required]],
      descripPro: ['', [Validators.required]]
    })
  }
  ngOnInit(): void {
    const id = this.acroute.snapshot.params['id'];
    this.proService.porId(id).subscribe(
      data => {
        this.form.setValue(data)
      }, err => {
        alert("Error al modificar el Proyecto");
        this.router.navigate(['']);
      }
    )
  }

  editar() {
    const educa = this.form.value;
    this.isEnviado = true;
    const id = this.acroute.snapshot.params['id'];
    this.proService.editar(id, educa).subscribe(
      data => {
        alert("Proyecto modificada");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el Proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
