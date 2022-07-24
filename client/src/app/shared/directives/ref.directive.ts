import {Directive, ViewContainerRef} from '@angular/core'

@Directive({
  selector: '[modalRef]'
})
export class RefDirective {
  constructor(public containerRef: ViewContainerRef) {
  }
}
