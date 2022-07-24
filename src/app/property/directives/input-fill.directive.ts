import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFill]'
})
export class InputFillDirective {

  @HostListener('focus') onFocus(){
    this.element.nativeElement.style.backgroundColor = '#da3d3d';
    this.element.nativeElement.style.color = 'white';
    this.element.nativeElement.style.borderColor = '#AB1E39';
  }

  @HostListener('blur') onBlur(){
    this.element.nativeElement.style.backgroundColor = 'white';
  }

  constructor(private element: ElementRef) {}

}
