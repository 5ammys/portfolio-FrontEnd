import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/models/experiencia.model';
import url from 'src/app/services/helper';
import { RestService } from 'src/app/services/rest.service';
import { SwitchService } from 'src/app/services/switchservice';

@Component({
  selector: 'app-exp-mod',
  templateUrl: './exp-mod.component.html',
  styleUrls: ['./exp-mod.component.css']
})
export class ExpModComponent implements OnInit {
  checker:any;
  exp:any;

  constructor(
    private modalS:SwitchService,
    private rest:RestService,
  
    ) {
      
     }
    
  ngOnInit(): void {
    this.getObject()
  }

  
  formSubmit(){
    this.rest.editObj(url+"/auth/experiencia/create",this.exp)
    .subscribe((data)=>{console.log(data)});
    console.log(this.exp);
  }
  public getObject(){
    this.modalS.object.subscribe((valor)=>{this.exp=valor})
  }
  public check(){
    this.modalS.displayExp.subscribe((valor)=>{this.checker=valor})
    return this.checker as boolean;
  }
  public close(){
    this.modalS.displayExp.emit(false);
  }

}
