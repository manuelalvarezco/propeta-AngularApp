import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelectResult]'
})
export class SelectResultDirective {

  @HostListener('blur') onBlur(){
    console.log('blur');
  }

  constructor(private element: ElementRef) { }

}
