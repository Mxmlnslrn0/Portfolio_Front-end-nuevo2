import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDeService } from 'src/app/service/acerca-de.service';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';


@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  form: FormGroup;
  isEnviado: boolean = false;

  constructor(private usuService: AcercaDeService,
    private formBuilder: FormBuilder,
    private acroute: ActivatedRoute,
    private route: Router,
    private storage: Storage
  ) {
    this.form = this.formBuilder.group({
      idUsu: ['', [Validators.required]],
      nombreUsu: ['', [Validators.required]],
      oficioUsu: ['', [Validators.required]],
      descripUsu: ['', [Validators.required]],
      imgUsu: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    const id = this.acroute.snapshot.params['id'];
    this.usuService.porId(id).subscribe(
      data => {
        this.form.setValue(data)
      }, err => {
        alert("Error al obtener la información del Usuario");
        this.route.navigate(['']);
      }
    )
  }

  editar() {
    const educa = this.form.value;
    this.isEnviado = true;
    const id = this.acroute.snapshot.params['id'];
    this.usuService.cambiar(id, educa).subscribe(
      data => {
        alert("Usuario modificado");
        this.route.navigate(['']);
      }, err => {
        alert("Error al modificar el Usuario");
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

    this.form.patchValue({ imgUsu: url });
    console.log(url);
  }
}
