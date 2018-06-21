import { Component, OnInit } from '@angular/core';

@Component({
  // 标签选择器
  selector: 'app-test', // <app-test></app-test>
  // // id 选择器
  // selector: '#app', // <div id="app"></div>
  // // 属性选择器
  // selector: '[message]', // <div message></div>
  // // 带有值的属性选择器
  // selector: '[message="hello"]', // <div message="hello"></div>
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
