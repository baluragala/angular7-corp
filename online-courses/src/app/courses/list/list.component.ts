import { Component, OnInit, Inject } from "@angular/core";
import { Course } from "../course.interface";
import { CourseService } from "../course.service";
import { SERVICE } from "../tokens";

@Component({
  selector: "oca-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  activeCourse: string;
  courses: Array<Course>;

  constructor(
    private courseService: CourseService,
    @Inject("API_KEY") private apiKey: string,
    @Inject(SERVICE) private service: any
  ) {
    console.log(courseService, apiKey, service);
  }

  ngOnInit() {
    // let s = new CourseService();
    this.courses = this.courseService.getCourses();
  }

  onCourseActive(course: Course) {
    this.activeCourse = course.title;
  }
}
