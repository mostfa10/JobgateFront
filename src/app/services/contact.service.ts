import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  saveMessage(message: string) {
    
    
    return this.http.post(`${environment.JobGateBD}/message`,message)

}
}
