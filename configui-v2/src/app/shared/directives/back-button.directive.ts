import { Directive, HostListener, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appBackButton]'
})
export class BackButtonDirective {
  @HostListener('click', ['$event'])
  goBackInHistory(event: Event) {
    window.history.back();
  }
  constructor(private el: ElementRef, private renderer: Renderer) { }
}
