import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-greet',
  templateUrl: './dialog.component.html',
  styleUrls: ['dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @Input() index: number = 0;

  @Input() vc: ViewContainerRef;
  constructor(public productService: ProductService) {}
  ngOnInit(): void {}
  cancel() {
    this.vc.clear();
  }
  remove() {
    console.log(this.index);
    this.productService.removeProduct(this.index);
    this.vc.clear();
  }
}
