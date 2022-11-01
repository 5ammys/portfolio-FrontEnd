import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import url from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public obtenerToken(loginData:any){
    return this.http.post(url+'/auth/login', loginData);
  }

  //Inicio de sesion por LocalStorage
  public guardarTokenEnLocalStorage(token:any){
    localStorage.setItem('token',token);
  }

  public estaLogueado(){
    let tokenUser=localStorage.getItem('token');
    if(tokenUser==undefined || tokenUser=='' || tokenUser==null){
      return false;
    }else{
      return true;
    }
  }

  public cerrarSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public obtenerTokenByLocal(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    let userStorage=localStorage.getItem('user');
    if(userStorage!=null){
      return JSON.parse(userStorage);
    }else{
      this.cerrarSesion();
      return null;
    }
  }

  public getUserRole(){
    let user=this.getUser();
    console.log(user.authorities);
    return user.authorities[0].authority;
  }

  public obtenerUsuarioActual(){
    return this.http.get(`${url}/auth/actual`);
  }
}
