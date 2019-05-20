import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { NavComponent } from "./nav/nav.component";
import { CoursesModule } from "./courses/courses.module";
import { SharedModule } from "./shared/shared.module";
import { CourseService } from "./courses/course.service";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, CoursesModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
