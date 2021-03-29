import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product.component';

@NgModule({
  declarations: [UpdateProductComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class UpdateProductModule {}
