import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
  providers: [SharedService]
})
export class SharedComponent implements OnInit {
  user1 = [];

  constructor(
    public shared: SharedService,
    private http: Http
  ) { 
    http.get('../assets/userDB.json')
      .toPromise()
      .then((data) => {
        this.user1 = data.json()
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {
    
  }

}
