import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }
  getmessage(){
    return this.http.get(`${environment.JobGateBD}/message`)
  }
  getDiscussionMessages(sender: string, condidatId: string) {
    return this.http.get(`${environment.JobGateBD}/messages/discussion/${sender}/${condidatId}`);
  }
  getMessageById(id: string) {
    return this.http.get(`${environment.JobGateBD}/message/${id}`);
  }
}
