import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Habilidades } from "../models/habilidades.model";

@Injectable({
    providedIn: 'root'
  })
  export class HabilidadesService {
    uri = 'http://localhost:8080/habilidad';

    constructor(private http: HttpClient) { }

    public Lista():Observable<Habilidades[]>{
        return this.http.get<Habilidades[]>(this.uri + '/verTodo');
    } 

    public porId(id: number): Observable<Habilidades>{
        return this.http.get<Habilidades>(this.uri +`/traerPorId/${id}`);
      }

    public guardar(habilidad: Habilidades):Observable<any>{
        return this.http.post<any>(this.uri + '/nuevo', habilidad);
      }

    public editar(id: number, habilidad: Habilidades):Observable<any>{
        return this.http.put<any>(this.uri + `/editar/${id}`, habilidad);
      }

      public eliminar(id: number):Observable<any>{
        return this.http.delete<any>(this.uri + `/eliminar/${id}`);
      }

  }