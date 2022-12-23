import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  uri = '';
  token: any;

  constructor(private http:HttpClient, private router: Router) { }

  obtenerDatos():Observable<any>{
   return this.http.get("assets/data/data.json")
  }

  login(email: string, password: string){
    this.http.post(this.uri + '/authenticate', {email: email, password: password})
    .subscribe((resp: any) => {
      //redirecciona al usuario al perfil
      this.router.navigate(['profile']);
      //guarda el token en el localStorage
      localStorage.setItem('auth_token', resp.token);
    })
  };
  //para cerrar la sesion se elimina el token
  logout(){
    localStorage.removeItem('token');
  }

  //servicio para verificar si existe a sesion
  public get logIn(): boolean{
    return (localStorage.getItem('token') !== null);
  }
}
