import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../models/educacion.model';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  uri = 'http://localhost:8080/educacion';

  constructor(private http: HttpClient) { }

  public lista():Observable<educacion[]>{
    return this.http.get<educacion[]>(this.uri + '/ver');
  }

  /*public detail(id: Number): Observable<educacion>{
    return this.http.get<educacion>(this.uri +`detail/${id}`);
  }*/

  public guardar(educacion:educacion):Observable<any>{
    return this.http.post<any>(this.uri + '/nuevo', educacion);
  }

  public editar(id: Number, educacion:educacion):Observable<any>{
    return this.http.put<any>(this.uri + `editar/${id}`, educacion);
  }

  public eliminar(id: Number):Observable<any>{
    return this.http.delete<any>(this.uri + `/${id}`);
  }
}
