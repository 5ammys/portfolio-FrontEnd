import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable, throwError } from 'rxjs';
//import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http:HttpClient) { }

  public get(url:string,id:number){
    return this.http.get(url+"/"+id);
  }
}
