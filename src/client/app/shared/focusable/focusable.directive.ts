import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector : '[focusable]'
})
export class FocusableDirective {
  constructor(public renderer: Renderer, public elementRef: ElementRef) {}

  focus() {
    setTimeout( () => {
      this.renderer.invokeElementMethod(
        this.elementRef.nativeElement, 'focus', []);
    }, 100);
  }
}
