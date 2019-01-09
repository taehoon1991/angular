import { PromiseService } from './promise.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
  providers: [PromiseService]
})
export class PromiseComponent implements OnInit {
  seconds: number = 0;
  secPass: Observable<any>;
  secInfo: any;

  constructor(
    private alert: PromiseService,
    private secFun: PromiseService
  ) {
    this.secInfo = { viewSec : 0 }; 
  }

  createAlert() {
    this.secInfo = {viewSec : this.seconds}//시작 시 초 입력
           
    this.alert.startTime(this.seconds);
    this.secPass = this.secFun.timeFun();
    this.secPass.subscribe(
      secData => {
        this.secInfo = secData;

      });

    
  }
  ngOnInit() {
    
  }
}
