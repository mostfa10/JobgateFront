import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  constructor(private http:HttpClient) { }
  getAllCandidatures(){
    return this.http.get(`${environment.JobGateBD}/condidature/all`)
   }

   getCandidaturesByUserId(userId:string){
    return this.http.get(`${environment.JobGateBD}/condidature/entrepriseId/${userId}`)
   }
   getScoreByCandidatId(candidatId: string): Observable<number> {
    const url = `${environment.JobGateBD}/offre/${candidatId}/score`;
    return this.http.get<number>(url); // Assume the API returns the score as a number
  }
  
   downloadCV(id: string): Observable<ArrayBuffer> {
    const url = `${environment.JobGateBD}/condidature/${id}/cv`;
    return this.http.get(url, { responseType: 'arraybuffer' });
  }

  updateCondidature(candidature: any){
    return this.http.put(`${environment.JobGateBD}/condidature/${candidature._id}`, candidature);
  }
  }

