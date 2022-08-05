import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  institutos:any[];
  constructor(){ 
    this.institutos=[{nombre:'Chacabuco'},{nombre:'UNLAM'}];
  }
  ngOnInit(): void {
  }

}
