import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData={
    username:"",
    password:""
  }
  headerData:any;
  token?:string;
  form:FormGroup;
  constructor(
      private formBuilder:FormBuilder,
      private login:LoginService,
      private router:Router,
    ) {
      this.form=this.formBuilder.group(
        {
          username:['',Validators.required],
          password:['',Validators.compose([Validators.required,Validators.minLength(8)])],
        }
      )
    }

  ngOnInit(): void {

  }


  get Username(){
    return this.form.get('username');
  }
  get Password(){
    return this.form.get('password');
  }
  formSubmit(){
    this.login.obtenerToken(this.loginData).subscribe(
      (data:any)=>{
        this.login.guardarTokenEnLocalStorage(data.token);
        this.login.obtenerUsuarioActual().subscribe((user:any)=>{
          this.login.setUser(user);
        });
        setTimeout(() => {
          this.router.navigateByUrl('home');
        }, 300);
      },(error)=>{
        console.log(error);
      }
    );
    
  }
}
