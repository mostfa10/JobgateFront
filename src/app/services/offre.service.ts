import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  private apiUrl = 'http://localhost:3000/offres/userconnect'; // L'URL de l'API côté backend pour récupérer les offres associées à l'entreprise de l'utilisateur connecté

  public search = new BehaviorSubject<string>("");

  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get(`${environment.JobGateBD}/offre`)
   }

  getOffers(query:string = ''){
    return this.http.get(`${environment.JobGateBD}/offre?${query}`)
   }
   getOffersL(){
    return this.http.get(`${environment.JobGateBD}/offre/latest`)
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
  
   getOffresForCurrentUser(){
    return this.http.get(`${environment.JobGateBD}/offre/userconnect`);
  }
 
 

}
