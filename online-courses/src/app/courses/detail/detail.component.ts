import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "oca-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  title: string;
  author: string;
  q: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get("title");
    this.author = this.route.snapshot.paramMap.get("author");
    this.q = this.route.snapshot.queryParams;
  }

  goToCourses() {
    this.router.navigateByUrl("/courses", { queryParams: { page: 1 } });
  }
}
