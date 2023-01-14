import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  form: FormGroup;
  id: number = -1;

  isEnviado: boolean = false;

  constructor(private educService: EducacionService,
    private formBuilder: FormBuilder,
    private acroute: ActivatedRoute,
    private route: Router,
    private storage: Storage
  ) {
    this.form = this.formBuilder.group({
      idEdu: ['', [Validators.required]],
      nombreEdu: ['', [Validators.required]],
      carreraEdu: ['', [Validators.required]],
      periodo_unoEdu: ['', [Validators.required]],
      periodo_dosEdu: ['', [Validators.required]],
      descripEdu: ['', [Validators.required]],
      imgEdu: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    const id = this.acroute.snapshot.params['id'];
    this.educService.porId(id).subscribe(
      data => {
        this.form.setValue(data)
      }, err => {
        alert("Error al modificar la Educación");
        this.route.navigate(['']);
      }
    )
  }


  editar() {
    const educa = this.form.value;
    this.isEnviado = true;
    const id = this.acroute.snapshot.params['id'];
    this.educService.editar(id, educa).subscribe(
      data => {
        alert("Educación modificada");
        this.route.navigate(['']);
      }, err => {
        alert("Error al modificar la educación");
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

    this.form.patchValue({ imgEdu: url });
    console.log(url);
  }


}
