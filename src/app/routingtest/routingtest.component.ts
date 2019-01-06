import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routingtest',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./routingtest.component.css']
})
export class RoutingtestComponent implements OnInit {
  title = 'app works!';
  constructor() { }

  ngOnInit() {
  }

}
