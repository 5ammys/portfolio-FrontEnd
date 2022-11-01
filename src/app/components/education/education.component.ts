import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion.model';
import url from 'src/app/services/helper';
import { LoginService } from 'src/app/services/login.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  edu:Educacion=new Educacion();
  constructor(
     private login:LoginService,
     private rest:RestService,
     ){}
  ngOnInit(): void {
   this.getEduById();
  }

  public getEduById(){
    let user:any=this.login.getUser();
    this.rest.getById(url+"/educacion",user.id)
      .subscribe(
        data=>{
          this.edu=data
        }
      )
  }

}
