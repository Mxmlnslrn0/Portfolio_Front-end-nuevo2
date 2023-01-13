import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../models/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  uri = 'https://portfolio-back-end-drmy.onrender.com/experiencia';

  constructor(private http: HttpClient) { }
  
  public lista():Observable<experiencia[]>{
    return this.http.get<experiencia[]>(this.uri + '/verTodo');
  }

  public porId(id: number): Observable<experiencia>{
    return this.http.get<experiencia>(this.uri +`/traerPorId/${id}`);
  }

  public guardar(experiencia:experiencia):Observable<any>{
    return this.http.post<any>(this.uri + '/nuevo', experiencia);
  }

  public editar(id: number, experiencia:experiencia):Observable<any>{
    return this.http.put<any>(this.uri + `/editar/${id}`, experiencia);
  }

  public eliminar(id: number):Observable<any>{
    return this.http.delete<any>(this.uri + `/eliminar/${id}`);
  }
}
