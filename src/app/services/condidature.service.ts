import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CondidatureService {

  constructor(private http:HttpClient) { }

  
  createcondidature(con:any){
    console.log(con)
    return this.http.post(`${environment.JobGateBD}/condidature`,con)
   }
  
   uploadFile(formData: FormData) {
    return this.http.post(`${environment.JobGateBD}/upload`, formData);
  }
  getAllCondidatures(userId: string) {
    return this.http.get(`${environment.JobGateBD}/condidature?userId=${userId}`);
  }
  
  getTestByCandidatId(candidatId: string): Observable<any> {
    return this.http.get<any>(`${environment.JobGateBD}/offre/${candidatId}/test`);
  }
  getFavoriteOffers(userId: string): Observable<any> {
    return this.http.get(`$${environment.JobGateBD}/user/${userId}/favorite-offers`);
  }

  deleteC(id:any) {
    return this.http.delete(`${environment.JobGateBD}/condidature${id}`);
  }
}

