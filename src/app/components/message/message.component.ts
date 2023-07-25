import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  userconnect = JSON.parse(localStorage.getItem("userconnect")!);
  messages!:any[];
  messagesD!:any[];
  msg: any | null = null;
  sender!: string;
  condidatId!: string;
  descussion!:any[];
  messageId!: string;
  discussions:any = []
  activeMessageId: string | null = null;
  conversationMessages:any = []
  discussionName!:string
  partner!:any
  constructor(private message:MessageService, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.userconnect){
      this.loadDiscussion()
    }
  }
  
  showMessageDetails(messageId: string): void {
    this.activeMessageId = messageId;
    this.message.getMessageById(messageId).subscribe((res:any) => {
      this.descussion=res["data"]
      console.log(" descussion",this.descussion)
    });
  }


  loadDiscussion(){
    this.message.getDiscussions(this.userconnect.user._id).subscribe((res: any) => {
      this.discussions = res; 
      console.log(this.discussions)
    });
  }

  getDiscussionImg(discussion:any){
    if(discussion.participants != null){
      if(discussion.participants.sender && discussion.participants.sender.userId != this.userconnect.user._id){
        return discussion.participants.sender.image
      }else if(discussion.participants.receiver && discussion.participants.receiver.userId != this.userconnect.user._id){
        return discussion.participants.receiver.image
      }
    }
      if(discussion.participantsEnterprise.sender && discussion.participantsEnterprise.sender.userId != this.userconnect.user._id){
        return discussion.participantsEnterprise.sender.image
      }else if(discussion.participantsEnterprise.receiver && discussion.participantsEnterprise.receiver.userId != this.userconnect.user._id){
        return discussion.participantsEnterprise.receiver.image

      }
    
  }

  getDiscussionName(discussion:any){
    if(discussion.participants != null){
      if(discussion.participants.sender && discussion.participants.sender.userId != this.userconnect.user._id){
        return discussion.participants.sender.name +' '+ discussion.participants.sender.lastname
      }else if(discussion.participants.receiver && discussion.participants.receiver.userId != this.userconnect.user._id){
        return discussion.participants.sender.name +' '+ discussion.participants.sender.lastname
      }
    }
      if(discussion.participantsEnterprise.sender && discussion.participantsEnterprise.sender.userId != this.userconnect.user._id){
        return discussion.participantsEnterprise.sender.fullname
      }else if(discussion.participantsEnterprise.receiver && discussion.participantsEnterprise.receiver.userId != this.userconnect.user._id){
        return discussion.participantsEnterprise.receiver.fullname

      }
  }

  fetchConversationMessages(senderId: string,receiverId: string) {
    this.message
      .getMessagesForConversation(senderId, receiverId)
      .subscribe((messages: any[]) => {
        console.log(messages);
        this.conversationMessages = messages;
      });
  }

  setCurrentDiscussionInfos(discussion:any){
    if(discussion.participants != null){
      if(discussion.participants.sender && discussion.participants.sender.userId != this.userconnect.user._id){
        this.partner = {
          _id : discussion.participants.sender.userId,
          fullName : discussion.participants.sender.name +' '+ discussion.participants.sender.lastname,
          image : discussion.participants.sender.image
        } 
      }else if(discussion.participants.receiver && discussion.participants.receiver.userId != this.userconnect.user._id){
        this.partner = {
          _id : discussion.participants.receiver.userId,
          fullName : discussion.participants.receiver.name +' '+ discussion.participants.receiver.lastname,
          image : discussion.participants.receiver.image
        } 
      }
    }
      if(discussion.participantsEnterprise.sender && discussion.participantsEnterprise.sender.userId != this.userconnect.user._id){
        this.partner = {
          _id : discussion.participantsEnterprise.sender.userId,
          fullName : discussion.participantsEnterprise.sender.fullname,
          image : discussion.participantsEnterprise.sender.image
        } 
      }else if(discussion.participantsEnterprise.receiver && discussion.participantsEnterprise.receiver.userId != this.userconnect.user._id){
        this.partner = {
          _id : discussion.participantsEnterprise.receiver.userId,
          fullName : discussion.participantsEnterprise.receiver.fullname,
          image : discussion.participantsEnterprise.receiver.image
        } 
      }
  }

  checkIfMyMsg(message:any){
    return message.sender != this.partner._id
  }
}
