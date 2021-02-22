import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appAutoResize]'
})
export class TextareaResize {
  constructor(private element: ElementRef) {
    setTimeout(() => {
      this.element.nativeElement.style.height = (this.element.nativeElement.scrollHeight) + 'px';
    }, 10);
  }
}
