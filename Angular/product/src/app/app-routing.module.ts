import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  {
    path: 'products/:productType/:priceRange/:productBrand',
    component: ProductsComponent,
  },
  { path: '', component: ChatbotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
