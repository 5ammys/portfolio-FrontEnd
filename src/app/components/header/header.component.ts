import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  text:string="Cerrar sesión";
  constructor(private router:Router, private login:LoginService) {}
  cerrarSesionUsuario(){
    this.login.cerrarSesion();
    this.router.navigateByUrl('login');
  }
  ngOnInit(): void {
  }
  
}
