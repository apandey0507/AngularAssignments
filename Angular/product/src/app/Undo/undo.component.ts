import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';
import { Input, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-undo',
  templateUrl: './undo.component.html',
  styleUrls: ['./undo.component.css'],
})
export class UndoComponent implements OnInit {
  @Input() index: number;
  @Input() vc: ViewContainerRef;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    setTimeout(() => {
      // this.vc.clear();
      this.vc.clear();
    }, 5000);
  }
  undo() {
    this.productService.undo(this.index);
    this.vc.clear();
  }
}
