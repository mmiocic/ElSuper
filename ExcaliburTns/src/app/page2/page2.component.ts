import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  styles: [        "Image { background-color: coral }",
  ".title { margin: 10; horizontal-align: center; font-size: 32 }",
  "#main > AbsoluteLayout { margin: 10 }",
  "#main > DockLayout { margin: 10 }",
  "#main > GridLayout { margin: 10 }",
  "#main > StackLayout { margin: 10 }",
  "#main > WrapLayout { margin: 10 }",
  "#main > FlexboxLayout { margin: 10 }"],
  moduleId: module.id,
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
