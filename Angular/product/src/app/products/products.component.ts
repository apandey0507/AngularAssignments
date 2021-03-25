import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

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

  typeFilter: string = '';
  rangeFilter: number = 0;
  brandFilter: string = '';

  showShortDescription = true;
  public productList: Array<Product>;
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
  constructor(
    private cfr: ComponentFactoryResolver,
    public productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.productList = [];
  }
  dialog(index: number) {
    this.vc.clear();
    import('../dialog/dialog.component').then(({ DialogComponent }) => {
      let dialogcomp = this.vc.createComponent(
        this.cfr.resolveComponentFactory(DialogComponent)
      );
      dialogcomp.instance.index = index;
      dialogcomp.instance.vc = this.vc;
    });
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      localStorage.removeItem('productList');
      if (params.has('productType')) {
        this.typeFilter = params.get('productType');
        this.rangeFilter = +params.get('priceRange');
        this.brandFilter = params.get('productBrand');
        this.productService.getProducts(
          this.typeFilter,
          this.rangeFilter,
          this.brandFilter
        );
      } else {
        this.productService.getProducts();
      }
    });
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
