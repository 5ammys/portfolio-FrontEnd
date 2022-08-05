import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  urlSkills="https://localhost:8080/";
  constructor(private http:HttpClient) { }

  public getSkills(id:number){
    return this.http.get<any[]>(this.urlSkills+"/"+id)
  }
}
