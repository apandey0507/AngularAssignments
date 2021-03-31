import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  @Input() index = 0;
  @Input() product: Product;
  @Input() vc: ViewContainerRef;
  form: FormGroup;

  constructor(
    public productService: ProductService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      productName: ['', Validators.required],
      productDescription: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(200),
        ],
      ],
      productPrice: [
        '',
        [Validators.required, Validators.min(500), Validators.max(1000000)],
      ],
    });

    this.form.patchValue(this.product);
  }
  cancel(): void {
    this.vc.clear();
  }
  submit(): void {
    if (this.form.valid) {
      this.product = Object.assign(this.product, this.form.value);
      this.productService.updateProduct(this.index, this.product);
      this.vc.clear();
    }
  }
}
