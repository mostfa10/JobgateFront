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
  sendNewMessage(sender: string, receiver: string, contenu: string): Observable<any> {
    const message = {
      sender,
      receiver,
      contenu,
    };
    return this.http.post<any>(`${environment.JobGateBD}/message`,message);
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
