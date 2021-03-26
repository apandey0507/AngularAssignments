import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  chatbot = true;
  showChatbot() {
    this.chatbot = !this.chatbot;
    console.log(this.chatbot);
  }
}
