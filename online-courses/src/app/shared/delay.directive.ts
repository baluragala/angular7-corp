import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[ocaDelay]"
})
export class DelayDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input()
  set ocaDelay(time: number) {
    setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, time);
  }
}
