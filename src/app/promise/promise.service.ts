import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class PromiseService {
  secChange: Observable<any>;
  sec: number = 0;
  constructor() {
    
  }
  startTime(seconds: number) {
    // alert과 카운트 같이 사용하기위해
    let totalSec: number = seconds;  
    this.sec = totalSec;
    this.createTimedAlert(totalSec); //alert
  }

  //alert - 기존
  createTimedAlert(totalSec: number): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(setTimeout(function () {
        alert('this alert took ' + totalSec + ' seconds to load');
      }, (totalSec * 1000))
      );
    })
  }
  // 시간초
  timeFun(): Observable<any> {
    this.secChange = new Observable(observer => {
 
      this.changeLoop(observer);
    });
    return this.secChange;
  }
  // 실행
  changeLoop(observer) {
    setTimeout(() => {
      
      if (this.sec > 0) {
        this.sec--;
        if(this.sec < 0 ) this.sec =0; 
        observer.next(
          { viewSec: this.sec }
        )
        this.changeLoop(observer);
      }
    }, 1000);
  }
  
}
