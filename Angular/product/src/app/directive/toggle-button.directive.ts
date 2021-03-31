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
  @Input() limit = 5;
  private toggle = false;

  @HostListener('click', ['$event']) onClick($event): void {
    this.toggle = !this.toggle;
    const trail = '...';

    if (this.toggle) {
      this.el.nativeElement.innerText = this.description;
    } else {
      this.el.nativeElement.innerText =
        this.description.substring(0, this.limit) + trail + 'Read More';
    }
  }
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    this.el.nativeElement.innerText =
      this.description.substring(0, this.limit) + '...Read More';
  }
}
