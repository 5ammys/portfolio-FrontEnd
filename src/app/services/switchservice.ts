import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
     providedIn:'root'
})

export class SwitchService{
     constructor(){
     }

     editSwitch=new EventEmitter<any>();

     displayEdu=new EventEmitter<any>();
     displayExp=new EventEmitter<any>();
     displaySkill=new EventEmitter<any>();
     displayAbout=new EventEmitter<any>();
     displayProy=new EventEmitter<any>();
     object=new EventEmitter<any>();
}