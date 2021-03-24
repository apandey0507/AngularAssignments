import { Component, OnInit } from '@angular/core';
import { productItems } from '../Constants/ProductItems';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent implements OnInit {
  selectedItem: string;
  productItem = Object.entries(productItems);

  constructor() {}

  ngOnInit(): void {}
}
