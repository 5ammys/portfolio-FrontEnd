import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import url from './helper';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http:HttpClient) { }

  public getById(url:string,id:number){
    return this.http.get(url+"/"+id);
  }
  public createObj(url:string,obj:any){
    return this.http.post(url,obj)
  }
  public editObj(url:string,obj:any){
    return this.http.put(url,obj)
  }
}
