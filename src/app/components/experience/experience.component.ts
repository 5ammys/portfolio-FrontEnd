import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  trabajos:any[];
  constructor() {
    this.trabajos=[{cargo:'Programador web junior'},{cargo:'Algo'}];
  }

  ngOnInit(): void {
    
  }

}
