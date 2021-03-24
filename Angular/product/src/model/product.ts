export class Product {
  public productName: string;
  public productImage: string;
  public productPrice: number;
  public productType: string;
  public productBrand: string;
  public productDescription: string;
  constructor() {
    this.productName = '';
    this.productImage = '';
    this.productPrice = 0;
    this.productDescription = '';
    this.productBrand = '';
    this.productType = '';
  }
}
