import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { NavComponent } from "./nav/nav.component";
import { CoursesModule } from "./courses/courses.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent],
  imports: [BrowserModule, CoursesModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
