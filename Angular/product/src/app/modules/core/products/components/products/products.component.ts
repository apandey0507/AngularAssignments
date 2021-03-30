import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../../../../model/product';

import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  title = 'product';

  typeFilter: string = '';
  rangeFilter: number = 0;
  brandFilter: string = '';

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
    import('../../../../Shared/dialog/dialog.component').then(
      ({ DialogComponent }) => {
        let dialogcomp = this.vc.createComponent(
          this.cfr.resolveComponentFactory(DialogComponent)
        );
        dialogcomp.instance.index = index;
        dialogcomp.instance.vc = this.vc;
        dialogcomp.instance.product = this.productService.productList[index];
      }
    );
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params.productType) {
        this.typeFilter = params.productType;
        this.rangeFilter = +params.productPrice;
        this.brandFilter = params.productBrand;
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
  update(index: number, product: Product) {
    this.vc.clear();
    import('../update-product/update-product.component').then(
      ({ UpdateProductComponent }) => {
        let updatecomp = this.vc.createComponent(
          this.cfr.resolveComponentFactory(UpdateProductComponent)
        );
        updatecomp.instance.index = index;
        updatecomp.instance.product = product;
        updatecomp.instance.vc = this.vc;
      }
    );
  }

  readMore(strLength) {}
}