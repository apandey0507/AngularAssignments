import { Component, DoCheck, OnInit } from '@angular/core';
import { productItems } from '../Constants/ProductItems';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent implements OnInit, DoCheck {
  selectedItem: string = '';
  selectedBrand: string = '';
  priceRange: number = 0;
  showBrand: boolean = false;
  productItem = productItems;
  productBrandArray: Array<string>;
  constructor() {}

  ngOnInit(): void {}
  ngDoCheck() {
    if (this.selectedItem) {
      this.productBrandArray = this.productItem.find(
        (v) => v.Id === this.selectedItem
      ).Brands;
    }
  }
}
