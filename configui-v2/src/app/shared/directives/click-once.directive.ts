import { Directive, HostListener, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appClickOnce]'
})
export class ClickOnceDirective {
  @HostListener('click', ['$event'])
  disableButtonForNSec(event: Event) {
    this.renderer.setElementProperty(this.el.nativeElement, "disabled", true);
    setTimeout(() => {
      this.renderer.setElementProperty(this.el.nativeElement, "disabled", false);
    }, 5000);
  }
  constructor(private el: ElementRef, private renderer: Renderer) {
  }
}
