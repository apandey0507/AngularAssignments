import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';
import { Product } from '../../model/product';

import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  title = 'product';
  descrptionLengthAllowed = 5;
  showShortDescription = true;
  public productList: Array<Product>;
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
  constructor(
    private cfr: ComponentFactoryResolver,
    public productService: ProductService
  ) {
    this.productList = [];
  }
  dialog(index: number) {
    this.vc.clear();
    import('../dialog.component').then(({ DialogComponent }) => {
      let dialogcomp = this.vc.createComponent(
        this.cfr.resolveComponentFactory(DialogComponent)
      );
      dialogcomp.instance.index = index;
      dialogcomp.instance.dialogVisiblity = false;
    });
  }
  ngOnInit() {
    this.productService.getProducts();
  }
  show() {
    console.log(this.productService.productList);
  }
  readMore(strLength) {
    this.showShortDescription = !this.showShortDescription;
    if (this.showShortDescription) {
      this.descrptionLengthAllowed = 5;
    } else {
      this.descrptionLengthAllowed = strLength;
    }
  }
}
