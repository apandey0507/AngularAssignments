import { Directive, ElementRef, HostListener } from '@angular/core';

// @Directive({
//   selector: 'button[ToggleButton]',
// })
// export class ToggleButtonDirective {
//   private showShortDescription: boolean = true;
//   constructor(private elRef: ElementRef) {}

//   @HostListener('click', ['$event.target'])
//   onClick(btn) {
//     console.log('button', btn, 'number of clicks:');
//   }
//   // @HostListener('click')
//   // toggleButton() {
//   //   console.log('clicked');
//   //   this.showShortDescription = !this.showShortDescription;
//   //   if (this.showShortDescription) {
//   //     this.elRef.nativeElement.innerHTML = 'Switch';
//   //   }
//   // }
// }

@Directive({ selector: 'button[counting]' })
class CountClicks {
  numberOfClicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  }
}
