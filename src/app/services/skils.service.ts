import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkilsService {

  constructor(private http:HttpClient) { }

  allskils(){
    return this.http.get(`${environment.JobGateBD}/skils`)
   }
   createskils(skils:any){
    return this.http.post(`${environment.JobGateBD}/skils`,skils)
   }
  }
