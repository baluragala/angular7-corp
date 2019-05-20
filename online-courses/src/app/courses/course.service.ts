import { Injectable } from "@angular/core";
import { Course } from "./course.interface";
import { CoursesModule } from "./courses.module";
import { AppModule } from "../app.module";

@Injectable()
export class CourseService {
  private courses: Array<Course>;

  constructor() {
    this.courses = [
      {
        title: "Fullstack web dev",
        author: "Kelly Case",
        price: 200,
        isPublished: true
      },
      {
        title: "Frontend web dev",
        author: "Kelly Case",
        price: 200,
        isPublished: false
      },
      {
        title: "Data Sciene",
        author: "Kelly Case",
        price: 200,
        isPublished: true
      },
      {
        title: "Computer Vision",
        author: "Kelly Case",
        price: 200,
        isPublished: true
      }
    ];
  }

  getCourses(): Array<Course> {
    return this.courses;
  }
}
