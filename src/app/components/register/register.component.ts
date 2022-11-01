import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import url from 'src/app/services/helper';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private rest:RestService,
    private router:Router
    ) { 
    this.form=this.formBuilder.group(
      {
        apellido:['',Validators.required],
        nombre:['',Validators.required],
        username:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.compose([Validators.required,Validators.minLength(8)])],
        perfilProfesional:['',Validators.required],
        descripcion:['',Validators.required],
        fotoPerfil:['',Validators.required]
      }
    )
    
  }

  ngOnInit(): void {
  }

  
  get Username(){
    return this.form.get('username');
  }
  get Apellido(){
    return this.form.get('apellido');
  }
  get Nombre(){
    return this.form.get('nombre');
  }
  get Email(){
    return this.form.get('email');
  }
  get Password(){
    return this.form.get('password');
  }
  get PerfilProfesional(){
    return this.form.get('perfilProfesional');
  }
  get Descripcion(){
    return this.form.get('descripcion');
  }
  get FotoPerfil(){
    return this.form.get('fotoPerfil')
  }
  formSubmit(){
    this.rest.createObj(url+"/auth/nuevoUsuario",this.form.value)
    .subscribe((data)=>{alert("Usuario Creado")})
    
    setTimeout(() => {
      this.router.navigateByUrl('login');
    }, 300);
  }   
  toLogin(){
    this.router.navigateByUrl('login');
  } 
}
