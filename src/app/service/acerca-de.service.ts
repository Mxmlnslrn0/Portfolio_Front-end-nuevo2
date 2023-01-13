import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../models/acerca-de.model';


@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  uri = 'https://portfolio-back-end-drmy.onrender.com/usuario';

  constructor(private http: HttpClient) { }

  public lista():Observable<usuario[]>{
    return this.http.get<usuario[]>(this.uri + '/verTodo');
  }
  
  public porId(id: number):Observable<usuario>{
    return this.http.get<usuario>(this.uri + `/traerPorId/${id}`);
  }
  
  public guardar(Usuario: usuario):Observable<any>{
    return this.http.post<any>(this.uri + '/nuevo', Usuario);
  }

  public cambiar(id: number, Usuario:usuario):Observable<any>{
    return this.http.put<any>(this.uri + `/editar/${id}`, Usuario);
  }

  /*public eliminar(id: number):Observable<any>{
    return this.http.delete<any>(this.uri + `/eliminar/${id}`);
  }*/

  public getUsuario():Observable<usuario>{
    return this.http.get<usuario>(this.uri + '/traer');
  }
}
