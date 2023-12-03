import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImportantText]',
  standalone: true
})

export class ImportantTextDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.background = "";
    el.nativeElement.style.color = "#FFFFFF";
    el.nativeElement.style.textAlign = "center";
    el.nativeElement.style.backgroundColor = "var(--lightBlue)";
    el.nativeElement.style.padding = "20px";
    el.nativeElement.style.margin = "5dvh auto";
    el.nativeElement.style.fontSize = "1.5rem";
    el.nativeElement.style.fontWeight = "bold";
    el.nativeElement.style.borderRadius = "20px";
  } 

}
