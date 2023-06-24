import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  public search = new BehaviorSubject<string>("");

  constructor(private http:HttpClient) { }

  getOffers(query:string = ''){
    return this.http.get(`${environment.JobGateBD}/offre?${query}`)
   }
   createOffre(offre:any){
    return this.http.post(`${environment.JobGateBD}/offre`,offre)
   }
   lastoffres(){
    return this.http.get(`${environment.JobGateBD}/offre/all`)
   }
   getoffreyid(id:any){
    return this.http.get(`${environment.JobGateBD}/offre/${id}`)
   }
   

}
