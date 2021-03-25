import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'products/:productType/:priceRange/:productBrand',
        component: ProductsComponent,
      },
      { path: 'products', component: ProductsComponent },
      {
        path: 'chatbot',
        component: ChatbotComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
