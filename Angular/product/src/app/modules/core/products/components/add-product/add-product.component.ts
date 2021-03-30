import { Component, OnInit } from '@angular/core';
import { productItems } from '../../../../../Constants/ProductItems';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  addProduct = true;
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}
  form: FormGroup;
  productItem = productItems;
  UrlReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      productName: ['', Validators.required],
      productType: [null, Validators.required],
      productBrand: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: [
        '',
        [Validators.required, Validators.min(500), Validators.max(1000000)],
      ],
      productImage: [
        '',
        [Validators.required, Validators.pattern(this.UrlReg)],
      ],
    });
  }
  submit() {
    if (this.form.valid) {
      let product = this.form.value;
      this.productService.addProduct(product);
      this.close();
    }
  }
  close() {
    this.addProduct = true;
  }
}
