import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  userconnect = JSON.parse(localStorage.getItem("userconnect")!);
  messages!:any[];
  constructor(private message:MessageService) { }

  ngOnInit(): void {
    this.messagebycondidat()
  
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
