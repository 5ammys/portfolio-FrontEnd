import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { SwitchService } from 'src/app/services/switchservice';

@Component({
  selector: 'app-edu-mod',
  templateUrl: './edu-mod.component.html',
  styleUrls: ['./edu-mod.component.css']
})
export class EduModComponent implements OnInit {
  checker:any;
  edu:any;

  form:FormGroup;
  constructor(
    private modalS:SwitchService,
    private rest:RestService
    ) { }

  ngOnInit(): void {
    this.getObject()
  }
  public getObject(){
    this.modalS.object.subscribe((valor)=>{this.edu=valor})
  }
  public check(){
    this.modalS.displayEdu.subscribe((valor)=>{this.checker=valor})
    return this.checker as boolean;
  }
  public close(){
    this.modalS.displayEdu.emit(false);
  }

  public update(){
    
  }
}
