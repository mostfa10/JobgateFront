import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  score: number = 0;
  

  constructor(private http:HttpClient) { }
  getAllCandidatures(){
    return this.http.get(`${environment.JobGateBD}/condidature/all`)
   }

   getCandidaturesByUserId(userId:string){
    return this.http.get(`${environment.JobGateBD}/condidature/entrepriseId/${userId}`)
   }

   setScore(score: number) {
    
    this.score = score;
    console.log(this.score,"s")
    return this.score;
   
  }

  getScore() {
    return this.score;
  }
   downloadCV(id: string): Observable<ArrayBuffer> {
    const url = `${environment.JobGateBD}/condidature/${id}/cv`;
    return this.http.get(url, { responseType: 'arraybuffer' });
  }
  }

