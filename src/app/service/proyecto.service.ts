import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  uri ='https://portfolio-back-end-drmy.onrender.com/proyecto'

  constructor(private http: HttpClient) { }

  public lista():Observable<proyecto[]>{
    return this.http.get<proyecto[]>(this.uri + '/verTodo');
  }

  public porId(id: number): Observable<proyecto>{
    return this.http.get<proyecto>(this.uri +`/traerPorId/${id}`);
  }

  public guardar(proyecto:proyecto):Observable<any>{
    return this.http.post<any>(this.uri + '/nuevo', proyecto);
  }

  public editar(id: number, proyecto:proyecto):Observable<any>{
    return this.http.put<any>(this.uri + `/editar/${id}`, proyecto);
  }

  public borrar(id: number):Observable<any>{
    return this.http.delete<any>(this.uri + `/eliminar/${id}`);
  }
}
