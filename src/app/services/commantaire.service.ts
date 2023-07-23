import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommantaireService {

  constructor(private http:HttpClient) { }
  createcomm(comm:any){
    console.log(comm)
    return this.http.post(`${environment.JobGateBD}/commentaire`,comm)
   }
   createNot(not:any){
    return this.http.post(`${environment.JobGateBD}/notification`,not)
   }
  //  comm(id:any){
  //   console.log(comm)
  //   return this.http.get(`${environment.JobGateBD}/commentaire/id`,)
  //  }
  }
