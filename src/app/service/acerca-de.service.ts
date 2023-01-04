import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../models/acerca-de.model';


@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  uri = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) { }

  public lista():Observable<usuario[]>{
    return this.http.get<usuario[]>(this.uri + '/ver');
  }

  public guardar(Usuario:usuario):Observable<any>{
    return this.http.post<any>(this.uri + '/nuevo', Usuario);
  }

  public cambiar(id: Number, Usuario:usuario):Observable<any>{
    return this.http.put<any>(this.uri + `/editar/${id}`, Usuario);
  }

  public eliminar(id:String):Observable<any>{
    return this.http.delete<any>(this.uri + `/${id}`);
  }

  public getUsuario():Observable<usuario>{
    return this.http.get<usuario>(this.uri + '/traer');
  }
}
