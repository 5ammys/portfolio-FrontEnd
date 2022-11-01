import { Injectable,EventEmitter  } from "@angular/core";

@Injectable({
     providedIn: 'root'
})

export class TransferData{
     constructor(){

     }
     stream=new EventEmitter<any>();
}