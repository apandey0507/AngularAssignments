import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customSrc',
})
export class SrcSetPipe implements PipeTransform {
  srcPath: any = [];
  transform(value: string, args: string): string {
    this.srcPath.push(`${value} 1400w`);
    this.srcPath.push(
      `https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-air-1.jpg&maxwidth=200&maxheight=200&format=jpg 1100w`
    );
    this.srcPath.push(
      `https://images.prismic.io/smallexchange-com/21260cc6-c545-4571-8f59-cd96052b327e_SMFE_Site_Buttons-SMALL%403x.png?auto=compress%2Cformat&maxwidth=150&maxheight=150&format=jpg 500w`
    );
    return this.srcPath;
  }
}
