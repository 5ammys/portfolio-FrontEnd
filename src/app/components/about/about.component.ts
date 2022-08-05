import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Usuario } from 'src/app/models/usuario.model';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id:number=1;
  user?:Usuario;
  constructor(private rest:RestService) {}

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(){
    this.rest.get("http://localhost:8080/usuario",this.id)
    .subscribe(
      data=>this.user=data
    )
  }
}
