import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switchservice';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class EduAddComponent implements OnInit {
  checker?:boolean;
  constructor(private switchBtn:SwitchService) { }

  ngOnInit(): void {
    
  }
  public check():boolean{
    this.switchBtn.editSwitch.subscribe((valor)=>{this.checker=valor})
    return this.checker as boolean;
  }
  
}
