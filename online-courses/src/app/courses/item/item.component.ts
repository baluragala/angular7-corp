import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Course } from "../course.interface";

interface Extras {
  index: number;
  even: boolean;
}
@Component({
  selector: "oca-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  extras: Extras;

  @Output()
  active: EventEmitter<Course> = new EventEmitter();

  styles1;
  styles2;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.styles1 = { border: "3px dotted red" };
      this.styles2 = { border: "3px dotted orange" };
    }, 5000);
  }

  onItemClicked() {
    this.active.emit(this.course);
  }
}
