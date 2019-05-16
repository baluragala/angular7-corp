import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "discount"
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, discountPercent: number): number {
    if (discountPercent) {
      return value - (value * discountPercent) / 100;
    }
    return value;
  }
}
