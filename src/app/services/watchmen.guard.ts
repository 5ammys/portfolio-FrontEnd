import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class WatchmenGuard implements CanActivate {
  constructor(private router:Router,private login:LoginService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const estado=this.login.estaLogueado();
    this.redirigir(estado);
    return estado;
  }

  public redirigir(flag:boolean):any{
    if(!flag){
      alert("No esta logueado");
      this.router.navigateByUrl('login');
    }
  }
}
