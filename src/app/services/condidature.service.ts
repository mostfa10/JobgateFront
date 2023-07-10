import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}

