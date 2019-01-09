import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  depths1 = [
    {
      'url': 'page1',
      'text': 'page 1'
    },
    {
      'url': 'page2',
      'text': 'page 2'
    }
  ]
  // 2 depth
  depths2 = [
    [
      {
        'url': 'page1_1',
        'text': 'page 1-1'
      }
    ],
    [
      {
        'url': 'page2',
        'text': 'page 2-2'
      }
    ]
  ]

}
