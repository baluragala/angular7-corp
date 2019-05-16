import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DelayDirective } from "./delay.directive";
import { HighlightDirective } from "./highlight.directive";
import { DiscountPipe } from "./discount.pipe";

@NgModule({
  declarations: [DelayDirective, HighlightDirective, DiscountPipe],
  imports: [CommonModule],
  exports: [DelayDirective, HighlightDirective, DiscountPipe]
})
export class SharedModule {}
