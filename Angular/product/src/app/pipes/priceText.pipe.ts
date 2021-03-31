import { Pipe, PipeTransform } from '@angular/core';
import { currencySymbol } from '../Constants/CurrencySymbol';
@Pipe({
  name: 'priceText',
})
export class PriceTextPipe implements PipeTransform {
  transform(value: string, args: string): string {
    const type = args ? args : 'INR';
    const symbol = currencySymbol[type];
    return symbol + value;
  }
}
