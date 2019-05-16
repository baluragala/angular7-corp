import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "oca-new-reactive",
  templateUrl: "./new-reactive.component.html",
  styleUrls: ["./new-reactive.component.css"]
})
export class NewReactiveComponent implements OnInit {
  courseFormGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    this.courseFormGroup = new FormGroup({
      title: new FormControl("Python Course", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ]),
      author: new FormGroup({
        first: new FormControl(),
        last: new FormControl()
      }),
      isPublished: new FormControl(),
      category: new FormControl()
    });
  }

  onSaveCourse() {
    console.log(this.courseFormGroup.value);
  }

  loadData() {
    //this.courseFormGroup.setValue
    //this.courseFormGroup.dirty = true;

    this.courseFormGroup.patchValue({
      title: "React",
      author: { first: "Dan", last: "Ab" },
      isPublished: false,
      category: "Web"
    });
  }
}
