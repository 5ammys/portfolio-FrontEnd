import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginService } from 'src/app/services/login.service';
import { SwitchService } from 'src/app/services/switchservice';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user:Usuario=new Usuario();
  modalSwitch?:boolean;
  constructor(private login:LoginService, private switchEdit:SwitchService) {}

  ngOnInit(): void {
    this.getUser();
    this.modalSwitch=false;
  }
  
  public editSwitch(){
    this.switchEdit.editSwitch.emit(!(this.modalSwitch));
    this.modalSwitch=!(this.modalSwitch)
  }

  public getUser(){
      this.user=this.login.getUser();
  }
}
