import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  chatbot = false;
  showChatbot() {
    this.chatbot = !this.chatbot;
  }
  constructor() {}

  ngOnInit(): void {}
}
