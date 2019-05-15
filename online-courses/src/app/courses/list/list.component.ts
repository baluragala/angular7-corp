import { Component, OnInit } from "@angular/core";
import { Course } from "../course.interface";

@Component({
  selector: "oca-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  activeCourse: string;
  courses: Array<Course> = [
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
  constructor() {}

  ngOnInit() {}

  onCourseActive(course: Course) {
    this.activeCourse = course.title;
  }
}
