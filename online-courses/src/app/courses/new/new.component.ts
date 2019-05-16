import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";

@Component({
  selector: "oca-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  // private _title: string;
  // set title(value: string) {
  //   this._title = value;
  //   console.log(value);
  // }

  @ViewChild("titleRef") titleRef: NgModel;

  title: string;
  author: { first: string; last: string } = { first: null, last: null };
  isPublished: boolean;
  category: string;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.titleRef.valueChanges.subscribe(e => console.log(e));
  }

  onSaveCourse(form: NgForm) {
    console.log(form.value);
    console.log({
      title: this.title,
      author: this.author,
      isPublished: this.isPublished,
      category: this.category
    });
  }
}
