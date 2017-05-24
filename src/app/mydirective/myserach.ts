import { Directive,ElementRef,Input } from '@angular/core';
@Directive({selector:'[mysearch]'})
export class mysearchDirective {
  constructor(el:ElementRef){
    el.nativeElement.style.opacity="0.2";
  }
}