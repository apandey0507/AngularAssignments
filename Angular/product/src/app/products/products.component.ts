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
    import('../dialog/dialog.component').then(({ DialogComponent }) => {
      let dialogcomp = this.vc.createComponent(
        this.cfr.resolveComponentFactory(DialogComponent)
      );
      dialogcomp.instance.index = index;
      dialogcomp.instance.vc = this.vc;
    });
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      localStorage.removeItem('productList');

      if (params.productType) {
        localStorage.removeItem('productList');
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
