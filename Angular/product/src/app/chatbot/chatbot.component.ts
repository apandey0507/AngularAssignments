import { Component, DoCheck, OnInit } from '@angular/core';
import { productItems } from '../Constants/ProductItems';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent implements OnInit, DoCheck {
  selectedItem = '';
  selectedBrand = '';
  priceRange = 0;
  showBrand = false;
  productItem = productItems;
  productBrandArray: Array<string>;
  constructor() {}

  ngOnInit(): void {}
  ngDoCheck(): void {
    if (this.selectedItem) {
      this.productBrandArray = this.productItem.find(
        (v) => v.Id === this.selectedItem
      ).Brands;
    }
  }
}
