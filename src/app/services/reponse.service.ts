import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor(private http:HttpClient) { }

  createR(comm:any){
    console.log(comm)
    return this.http.post(`${environment.JobGateBD}/reponse`,comm)
   }
   getResponsesByCommantaireId(commantaireId: string) {
    return this.http.get(`${environment.JobGateBD}/reponse?commentaireId=${commantaireId}`);
  }

}
