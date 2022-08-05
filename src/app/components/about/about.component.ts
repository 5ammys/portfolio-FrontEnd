import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  nombre:string='Samuel Mendez';
  titulo:string='Full Stack Developer Jr';
  abouText:string='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur temporibus iure molestiae reiciendis blanditiis esse quia voluptas inventore corporis, ab dolorem? Tempore eos aperiam a expedita accusantium quidem ea.';
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
