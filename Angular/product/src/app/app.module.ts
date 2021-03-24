import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { ProductsComponent } from './products/products.component';
import { ShortTextPipe } from './pipes/shortText.pipe';
import { PriceTextPipe } from './pipes/priceText.pipe';
import { ChatbotComponent } from './chatbot/chatbot.component';

import { ToggleButtonDirective } from './toggle-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ShortTextPipe,
    PriceTextPipe,
    ChatbotComponent,
    ToggleButtonDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
