import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http:HttpClient) { }

  alloffre(){
    return this.http.get(`${environment.JobGateBD}/offre`)
   }
   lastoffres(){
    return this.http.get(`${environment.JobGateBD}/offre/all`)
   }
   getoffreyid(id:any){
    return this.http.get(`${environment.JobGateBD}/offre/${id}`)
   }
   

}
