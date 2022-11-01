import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion.model';
import { Experiencia } from 'src/app/models/experiencia.model';
import url from 'src/app/services/helper';
import { LoginService } from 'src/app/services/login.service';
import { RestService } from 'src/app/services/rest.service';
import { SwitchService } from 'src/app/services/switchservice';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencia:Experiencia=new Experiencia();
  constructor(
    private login:LoginService,
    private rest:RestService,
    
  ) {  }

  ngOnInit(): void {
    this.getExpById();
  }
  public getExpById(){
    let user:any=this.login.getUser();
    this.rest.getById(url+"/experiencia",user.id)
    .subscribe(
      (data:Experiencia)=>{
        this.experiencia=data;
      }
    )
  }


}
