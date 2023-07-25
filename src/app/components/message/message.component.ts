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
  showMessage(message: any) {
    // Find the corresponding message element by ID
    const messageElement = document.getElementById(`inbox-message-${message.id}`);
    console.log(messageElement,"ju")

    // Mark the clicked message as active (you can customize the styling)
    const activeMessage = document.querySelector('.message.active');
    if (activeMessage) {
      activeMessage.classList.remove('active');
    }
    if (messageElement) {
      messageElement.classList.add('active');
    }
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
