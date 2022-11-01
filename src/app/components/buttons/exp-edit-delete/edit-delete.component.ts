import { Component, Input, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switchservice';

@Component({
  selector: 'app-exp-edit-delete',
  templateUrl: './exp-edit-delete.component.html',
  styleUrls: ['./edit-delete.component.css']
})
export class ExpEditDeleteComponent implements OnInit {
  @Input()
  model:any;

  checker?:boolean;
  constructor(private switchBtn:SwitchService) { }

  ngOnInit(): void {
    
  }
  public check():boolean{
    this.switchBtn.editSwitch.subscribe((valor)=>{this.checker=valor})
    return this.checker as boolean;
  }
  editExp(){
    this.switchBtn.displayExp.emit(true);
    this.switchBtn.object.emit(this.model);
  }
  
}
