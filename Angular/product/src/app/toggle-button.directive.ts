import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appToggleDescription]',
})
export class ToggleButtonDirective implements OnInit {
  @Input() description: string;
  private toggle = false;

  limit = 5;

  @HostListener('click', ['$event']) onClick($event) {
    this.toggle = !this.toggle;
    let trail = '...';

    if (this.toggle) {
      this.el.nativeElement.innerText = this.description;
    } else {
      this.el.nativeElement.innerText =
        this.description.substring(0, this.limit) + trail + 'Read More';
    }
  }
  constructor(private el: ElementRef) {}
  ngOnInit() {
    this.el.nativeElement.innerText =
      this.description.substring(0, this.limit) + '...Read More';
  }
}
