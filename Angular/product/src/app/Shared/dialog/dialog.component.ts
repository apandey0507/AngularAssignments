import {
  Component,
  OnInit,
  ViewContainerRef,
  Input,
  ComponentFactoryResolver,
} from '@angular/core';
import { Product } from 'src/model/product';
import { ProductService } from '../../modules/core/products/services/product.service';

@Component({
  selector: 'app-greet',
  templateUrl: './dialog.component.html',
  styleUrls: ['dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @Input() index: number = 0;
  @Input() product: Product;
  @Input() vc: ViewContainerRef;
  constructor(
    public productService: ProductService,
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit() {}
  cancel() {
    this.vc.clear();
  }
  remove() {
    this.productService.removeProduct(this.index);
    this.vc.clear();
    import('../Undo/undo.component').then(({ UndoComponent }) => {
      let undocomp = this.vc.createComponent(
        this.cfr.resolveComponentFactory(UndoComponent)
      );
      undocomp.instance.index = this.index;
      undocomp.instance.vc = this.vc;
      undocomp.instance.product = this.product;
    });
  }
}
