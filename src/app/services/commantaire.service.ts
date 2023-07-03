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
  }
