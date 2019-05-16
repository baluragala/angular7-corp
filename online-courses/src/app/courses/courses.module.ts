import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";
import { SharedModule } from "../shared/shared.module";
import { NewComponent } from "./new/new.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NewReactiveComponent } from "./new-reactive/new-reactive.component";

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    NewComponent,
    NewReactiveComponent
  ],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [ListComponent]
})
export class CoursesModule {}
