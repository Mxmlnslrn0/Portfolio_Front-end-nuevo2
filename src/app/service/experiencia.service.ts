import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../models/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  uri = 'http://localhost:8080/experiencia';

  constructor(private http:HttpClient) { }
  
  public lista():Observable<experiencia[]>{
    return this.http.get<experiencia[]>(this.uri + '/verTodo');
  }

  /*public detail(id: Number): Observable<experiencia>{
    return this.http.get<experiencia>(this.uri +`detail/${id}`);
  }*/

  public guardar(experiencia:experiencia):Observable<any>{
    return this.http.post<any>(this.uri + '/nuevo', experiencia);
  }

  public editar(id: Number, experiencia:experiencia):Observable<any>{
    return this.http.put<any>(this.uri + `editar/${id}`, experiencia);
  }

  public eliminar(id: Number):Observable<any>{
    return this.http.delete<any>(this.uri + `/${id}`);
  }
}
