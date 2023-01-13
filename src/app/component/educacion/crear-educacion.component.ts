import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-educacion',
  templateUrl: './crear-educacion.component.html',
  styleUrls: ['./crear-educacion.component.css']
})
export class CrearEducacionComponent implements OnInit {

  form: FormGroup;
  constructor(private educaService : EducacionService, 
              private formBuilder: FormBuilder,
              private router: Router, 
              private storage:Storage
) {
  this.form = this.formBuilder.group({
    idEdu:['', [Validators.required]],
    nombreEdu:['', [Validators.required]],
    carreraEdu:['', [Validators.required]],
    periodo_unoEdu:['', [Validators.required]],
    periodo_dosEdu:['', [Validators.required]],
    descripEdu:['', [Validators.required]],
    imgEdu:['', [Validators.required]]
  })
}

  ngOnInit(): void {
  }

  crear(): void {
    const edu = this.form.value;
    this.educaService.guardar(edu).subscribe(
      data =>{
        alert("Educación añadida");
        this.router.navigate(['']);
      }, err =>{
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


    this.form.patchValue({ imgEdu: url });
    console.log(url);
  }
}
