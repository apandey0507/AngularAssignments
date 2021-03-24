import { Pipe, PipeTransform } from '@angular/core';
import { currencySymbol } from '../Constants/CurrencySymbol';
@Pipe({
  name: 'priceText',
})
export class PriceTextPipe {
  transform(value: string, args: string): string {
    let type = args ? args : 'INR';
    let symbol = currencySymbol[type];
    return symbol + value;
  }
}
