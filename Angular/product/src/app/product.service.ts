import { Injectable } from '@angular/core';
import { Product } from 'src/model/product';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public productList: Array<Product>;
  public removedProduct: Product;

  constructor(private httpClient: HttpClient) {
    this.productList = [];
  }
  getProducts(type?, range?, brand?) {
    let products = localStorage.getItem('productList');
    if (!products) {
      this.httpClient.get<any>('../assets/product.json').subscribe((data) => {
        this.productList = data;
        if (type) {
          this.productList = this.productList.filter((el) => {
            return (
              el.productType === type ||
              el.productPrice <= range ||
              el.productBrand === brand
            );
          });
        }

        localStorage.setItem('productList', JSON.stringify(this.productList));
      });
    } else {
      this.productList = JSON.parse(products);
    }
  }

  removeProduct(index: number) {
    this.removedProduct = this.productList[index];
    this.productList.splice(index, 1);
    localStorage.setItem('productList', JSON.stringify(this.productList));
  }
  undo(index: number) {
    this.productList[index] = this.removedProduct;
    localStorage.setItem('productList', JSON.stringify(this.productList));
  }
}
