import { Component, Input, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switchservice';

@Component({
  selector: 'app-edu-edit-delete',
  templateUrl: './edu-edit-delete.component.html',
  styleUrls: ['./edit-delete.component.css']
})
export class EduEditDeleteComponent implements OnInit {
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
  editEdu(){
    this.switchBtn.displayEdu.emit(true);
    this.switchBtn.object.emit(this.model);
  }
}
