import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  chatbot = true;
  @ViewChild('add') add;
  constructor() {}
  showChatbot(): void {
    this.chatbot = !this.chatbot;
  }

  AddProduct(): void {
    this.add.addProduct = !this.add.addProduct;
  }
}
