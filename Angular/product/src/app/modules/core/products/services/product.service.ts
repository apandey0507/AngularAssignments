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
  async getProducts(type?, range?, brand?): Promise<void> {
    const products = localStorage.getItem('productList');
    if (!products || type) {
      this.httpClient.get<any>('../assets/product.json').subscribe((data) => {
        this.productList = data;
        if (type) {
          this.productList = this.productList.filter((el) => {
            return (
              el.productType === type &&
              el.productPrice <= range &&
              el.productBrand === brand
            );
          });
        } else {
          localStorage.setItem('productList', JSON.stringify(this.productList));
        }
      });
    } else {
      this.productList = JSON.parse(products);
    }
  }

  removeProduct(index: number): void {
    this.removedProduct = this.productList[index];
    this.productList.splice(index, 1);
    localStorage.setItem('productList', JSON.stringify(this.productList));
  }
  undo(index: number): void {
    this.productList[index] = this.removedProduct;
    localStorage.setItem('productList', JSON.stringify(this.productList));
  }

  updateProduct(index: number, product: Product): void {
    this.productList[index] = product;
    localStorage.setItem('productList', JSON.stringify(this.productList));
  }

  addProduct(product: Product): void {
    this.productList.push(product);
    localStorage.setItem('productList', JSON.stringify(this.productList));
  }
}
