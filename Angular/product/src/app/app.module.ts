import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ProductService } from './products/product.service';
import { ProductsComponent } from './products/products.component';
import { PriceTextPipe } from './pipes/priceText.pipe';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FormsModule } from '@angular/forms';
import { ToggleButtonDirective } from './toggle-button.directive';
import { HomeComponent } from './home/home.component';
import { SrcSetPipe } from './pipes/srcSet.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UpdateProductComponent,
    PriceTextPipe,
    ChatbotComponent,
    ToggleButtonDirective,
    HomeComponent,
    SrcSetPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,

    ReactiveFormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
