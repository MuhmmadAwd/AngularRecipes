import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropdownDirective{
 isOpen:boolean =false

 constructor(private elRef: ElementRef, private renderer: Renderer2) {}


@HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    if(this.isOpen) {
        this.renderer.addClass(this.elRef.nativeElement.querySelector('.dropdown-menu'), 'show');
    } else {
        this.renderer.removeClass(this.elRef.nativeElement.querySelector('.dropdown-menu'), 'show');
    }

}
}