import {
  Component,
  OnInit,
  ViewContainerRef,
  Input,
  ComponentFactoryResolver,
} from '@angular/core';
import { Product } from 'src/model/product';
import { ProductService } from '../../core/products/services/product.service';

@Component({
  selector: 'app-greet',
  templateUrl: './dialog.component.html',
  styleUrls: ['dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @Input() index = 0;
  @Input() product: Product;
  @Input() vc: ViewContainerRef;
  constructor(
    public productService: ProductService,
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}
  cancel(): void {
    this.vc.clear();
  }
  remove(): void {
    this.productService.removeProduct(this.index);
    this.vc.clear();
    import('../Undo/undo.component').then(({ UndoComponent }) => {
      const undocomp = this.vc.createComponent(
        this.cfr.resolveComponentFactory(UndoComponent)
      );
      undocomp.instance.index = this.index;
      undocomp.instance.vc = this.vc;
      undocomp.instance.product = this.product;
    });
  }
}
