import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/model/product';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public productList: Array<Product>;
  public dialogVisiblity = false;
  constructor(private httpClient: HttpClient) {
    this.productList = [];
  }
  getProducts() {
    let products = localStorage.getItem('productList');
    if (!products) {
      this.httpClient.get<any>('../assets/product.json').subscribe((data) => {
        this.productList = data;
        localStorage.setItem('productList', JSON.stringify(this.productList));
      });
    } else {
      this.productList = JSON.parse(products);
    }
  }
  removeProduct(index: number) {
    console.log(index);
    this.productList.splice(index, 1);
    localStorage.setItem('productList', JSON.stringify(this.productList));
  }
}
