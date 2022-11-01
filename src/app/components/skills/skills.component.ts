import { Component, OnInit } from '@angular/core';
import { UsuarioHabilidad } from 'src/app/models/usuariohabilidad.model';
import url from 'src/app/services/helper';
import { LoginService } from 'src/app/services/login.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  hab:UsuarioHabilidad=new UsuarioHabilidad();
  constructor(private rest:RestService, private login:LoginService) { 
  }

  ngOnInit(): void {
    this.getSkillById();
  }
  

  public getSkillById(){
    this.rest.getById(url+"/usuariohabilidad",this.login.getUser().id)
      .subscribe(
        data=>{this.hab=data, console.log(data)}
      )
  }
}
