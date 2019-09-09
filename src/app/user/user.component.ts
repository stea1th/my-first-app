import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private username: string;
  private isBtnDisabled: boolean;

  constructor() {
  }

  ngOnInit() {
    this.username = '';
    this.isBtnDisabled = true;
  }

  clearUserName() {
    this.ngOnInit();
  }

  observeInput() {
    this.isBtnDisabled = this.username === '';
  }
}
