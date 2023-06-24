import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http:HttpClient) { }

  allPlace(): Observable<any>{
    return this.http.get(`${environment.JobGateBD}/place`)
   }
}
