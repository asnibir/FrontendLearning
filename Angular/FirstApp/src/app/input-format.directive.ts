import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format: any;

  constructor(private el: ElementRef) { 
    
  }

  @HostListener('focus') onFcous(){
    console.log('on focus');
  }

  @HostListener('blur')onBlur() {
    console.log('on blur');
    let value: string = this.el.nativeElement.value;
    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLocaleLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }
 

}
