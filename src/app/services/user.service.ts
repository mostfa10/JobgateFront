import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  getUserById(id:string){
    return this.http.get(`${environment.JobGateBD}/user/${id}`)
  }

  updateProfile(id:string,obj:any){
    return this.http.put(`${environment.JobGateBD}/condidat/profile/${id}`,obj)
   }
}
