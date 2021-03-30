import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../modules/core/products/services/product.service';
import { Input, ViewContainerRef } from '@angular/core';
import { Product } from 'src/model/product';
@Component({
  selector: 'app-undo',
  templateUrl: './undo.component.html',
  styleUrls: ['./undo.component.css'],
})
export class UndoComponent implements OnInit {
  @Input() index: number;
  @Input() product: Product;
  @Input() vc: ViewContainerRef;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.vc.clear();
    }, 5000);
  }
  undo() {
    this.productService.undo(this.index);
    this.vc.clear();
  }
}
