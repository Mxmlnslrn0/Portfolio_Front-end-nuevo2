import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion.model';
import { proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  uri ='http://localhost:8080/proyecto'

  constructor(private http:HttpClient) { }

  public lista():Observable<proyecto[]>{
    return this.http.get<proyecto[]>(this.uri + '/verTodo');
  }

  /*public detail(id: Number): Observable<proyecto>{
    return this.http.get<proyecto>(this.uri +`detail/${id}`);
  }*/

  public guardar(proyecto:proyecto):Observable<any>{
    return this.http.post<any>(this.uri + 'nuevo', proyecto);
  }

  public editar(id:Number, proyecto:proyecto):Observable<any>{
    return this.http.put<any>(this.uri + `editar/${id}`, proyecto);
  }

  public borrar(id:Number):Observable<any>{
    return this.http.delete<any>(this.uri + `/${id}`);
  }
}
