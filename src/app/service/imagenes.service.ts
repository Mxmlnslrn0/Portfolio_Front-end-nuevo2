import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { async } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  url: string = "";

  constructor(private storage: Storage) { }

  public subirImagenes($event:any, name:string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagen/`+ name)
    uploadBytes(imgRef, file)
    .then(Response => {this.getImagen()})
    .catch(error => console.log(error))
  }

  getImagen(){
    const imagenesRef = ref(this.storage, 'imagen')
    list(imagenesRef)
    .then(async Response =>{
      for(let item of Response.items){
        this.url = await getDownloadURL(item);
        console.log("La url es:" + this.url)
      }
    })
    .catch(error => console.log(error))
  }
}
