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

  public getUsuario():Observable<usuario>{
    return this.http.get<usuario>(this.uri + '/traer');
  }
}
