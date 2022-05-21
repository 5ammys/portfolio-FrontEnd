import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:string[];
  constructor() { 
    this.skills=["CSS","JavaScript","Html","Angular JS", "React", "C", "SQL"];
  }

  ngOnInit(): void {
  }

}
