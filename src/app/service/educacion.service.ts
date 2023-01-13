import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  uri = 'https://portfolio-back-end-drmy.onrender.com/educacion';

  constructor(private http: HttpClient) { }

  public lista():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.uri + '/verTodo');
  }

  public porId(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.uri +`/traerPorId/${id}`);
  }

  public guardar(educacion: Educacion):Observable<any>{
    return this.http.post<any>(this.uri + '/nuevo', educacion);
  }

  public editar(id: number, educacion:Educacion):Observable<any>{
    return this.http.put<any>(this.uri + `/editar/${id}`, educacion);
  }

  public eliminar(id: number):Observable<any>{
    return this.http.delete<any>(this.uri + `/eliminar/${id}`);
  }
}
