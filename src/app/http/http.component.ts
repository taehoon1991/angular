import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  users = [];

  constructor(private http: Http) {
    http.get('../assets/dummyDB.json')
      .toPromise()
      .then((data) => {
        this.users = data.json()
      })
      .catch((err) => {
        console.log(err);
      })
  }

}
