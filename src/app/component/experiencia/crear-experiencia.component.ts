import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-crear-experiencia',
  templateUrl: './crear-experiencia.component.html',
  styleUrls: ['./crear-experiencia.component.css']
})
export class CrearExperienciaComponent implements OnInit {

  isEnviado: boolean = false;
  form: FormGroup;
  
  constructor(private expeService: ExperienciaService,
    private router: Router,
    private formBuilder: FormBuilder,
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
  }

  crear(): void {
    const exp = this.form.value;
    this.isEnviado = true;
    this.expeService.guardar(exp).subscribe(
      data => {
        alert("Educación añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Error al crear la educación");
        this.router.navigate(['']);
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
