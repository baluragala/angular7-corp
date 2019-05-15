import { Component } from "@angular/core";

/*
1. class
2. metadata
3. template
*/

@Component({
  selector: "oca-header",
  template: `
    <header>
      <h1>Online Courses</h1>
      <oca-nav></oca-nav>
    </header>
  `,
  styles: [
    `
      h1 {
        color: crimson;
      }
    `
  ]
})
export class HeaderComponent {}
