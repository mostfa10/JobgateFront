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

  activeMessageId: string | null = null;
  constructor(private message:MessageService, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.messagebycondidat();
  
    this.route.params.subscribe(params => {
      this.sender = params['sender'];
      console.log(this.sender, "sender");
  
      this.condidatId = params['condidatId'];
      console.log(this.condidatId, "condidatId");
  
      this.messageId = params['id'];
      console.log(this.messageId, "messageId");
  
      this.loadMessage(this.messageId);
      this.loadDiscussionMessages();
    });
  }
  loadMessage(id: string): void {
    this.message.getMessageById(id).subscribe(
      (msg) => {
        this.msg = msg;
      console.log(msg,"msg")

      },
      (error) => {
        console.error('Failed to load message', error);
      }
    );
  }
  
  showMessageDetails(messageId: string): void {
    console.log(messageId,"5")
    this.activeMessageId = messageId;
    this.message.getMessageById(messageId).subscribe((res:any) => {
      this.descussion=res["data"]
      console.log(" descussion",this.descussion)
    });
  }
  loadDiscussionMessages(): void {
    this.message.getDiscussionMessages(this.sender, this.condidatId).subscribe(
      (messagesD:any) => {
        this.messages = messagesD;
      },
      (error:any) => {
        console.error('Failed to load discussion messages', error);
      }
    );
  }

  messagebycondidat() {
    this.message.getmessage().subscribe((res: any) => {
      console.log(res,"kkk")
      // Filter messages where condidatId and sender match the userconnect's condidatId
      this.messages = res.data.filter((message: any) => {
        return (
          message.condidatId === this.userconnect.user.condidatId._id
          // message.sender === this.userconnect.user.condidatId
        );
      });
      console.log("messages", this.messages);
    });
  }
}
