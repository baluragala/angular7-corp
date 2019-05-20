import { NgModule, InjectionToken } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";
import { SharedModule } from "../shared/shared.module";
import { NewComponent } from "./new/new.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NewReactiveComponent } from "./new-reactive/new-reactive.component";
import { CourseService } from "./course.service";
import { SERVICE } from "./tokens";
import { RouterModule } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    NewComponent,
    NewReactiveComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: "courses", component: ListComponent },
      { path: "courses/new", component: NewReactiveComponent },
      { path: "courses/:title/:author", component: DetailComponent }
    ])
  ],
  providers: [
    { provide: CourseService, useClass: CourseService },
    { provide: "API_KEY", useValue: { key: "wsw355" } },
    {
      provide: SERVICE,
      useFactory: function() {
        return {
          getCourses() {}
        };
      }
    }
  ],
  exports: [ListComponent]
})
export class CoursesModule {}
