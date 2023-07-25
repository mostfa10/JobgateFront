import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getDiscussions(userId:string){
    return this.http.get(`${environment.JobGateBD}/message/conversations/${userId}`)
  }

  getMessagesForConversation(senderId: string, receiverId: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.JobGateBD}/message/${senderId}/${receiverId}`);
  }

}
