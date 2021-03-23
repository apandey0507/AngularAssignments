import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/model/product';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
    this.httpClient.get<any>('../assets/product.json').subscribe((data) => {
      this.productList = data;
    });
  }
  removeProduct(index: number) {
    console.log(index);
    this.productList.splice(index, 1);
  }
}
