import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-greet',
  templateUrl: './dialog.component.html',
  styleUrls: ['dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @Input() index: number = 0;

  @Input() dialogVisiblity: boolean = true;
  constructor(public productService: ProductService) {}
  ngOnInit(): void {}
  cancel() {
    this.dialogVisiblity = true;
  }
  remove() {
    console.log(this.index);
    this.productService.removeProduct(this.index);
    this.dialogVisiblity = true;
  }
}
