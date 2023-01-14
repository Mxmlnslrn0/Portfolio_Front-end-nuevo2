import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  isEnviado: boolean = false;
  form: FormGroup
  
  constructor(private expService: ExperienciaService,
    private formBuilder: FormBuilder,
    private acroute: ActivatedRoute,
    private route: Router,
    private storage: Storage
  ) {
    this.form = this.formBuilder.group({
      idExp: ['', [Validators.required]],
      empleoExp: ['', [Validators.required]],
      puestoExp: ['', [Validators.required]],
      periodo_unoExp: ['', [Validators.required]],
      periodo_dosExp: ['', [Validators.required]],
      descripExp: ['', [Validators.required]],
      imgExp: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    const id = this.acroute.snapshot.params['id'];
    this.expService.porId(id).subscribe(
      data => {
        this.form.setValue(data)
      }, err => {
        alert("Error al modificar la Experiencia");
        this.route.navigate(['']);
      }
    )
  }

  editar() {
    const exp = this.form.value;
    this.isEnviado = true;
    const id = this.acroute.snapshot.params['id'];
    this.expService.editar(id, exp).subscribe(
      data => {
        alert("Experiencia modificada");
        this.route.navigate(['']);
      }, err => {
        alert("Error al modificar la Experiencia");
        this.route.navigate(['']);
      }
    )
  }

  async onImagenSeleccionada(e: any) {
    let imagen = e.target.files[0]
    let imgRef = ref(this.storage, `imagen/${imagen.name}`);

    let response = await uploadBytes(imgRef, imagen)
      .catch(error => console.error(error))
    console.log(response);

    let url = await getDownloadURL(imgRef)
      .catch(error => console.error(error));

    this.form.patchValue({ imgExp: url });
    console.log(url);
  }

}
