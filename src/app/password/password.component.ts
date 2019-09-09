import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styles: [`
      .white {
          color: white;
      }
  `]
})
export class PasswordComponent implements OnInit {

  private shown: boolean;
  private clickTimes = [];
  private date;

  constructor() {
  }

  ngOnInit() {
    this.shown = false;
  }

  countClicksAndToggle(evt: MouseEvent) {
    this.shown = !this.shown;
    this.date = new Date();
    this.clickTimes.push(this.validate(this.date.getHours()) +
      ':' + this.validate(this.date.getMinutes()) +
      ':' + this.validate(this.date.getSeconds()));
    console.log(evt);
  }

  validate(num: number) {
    if (num < 10) {
      return '0' + num;
    }
    return num;
  }


}
