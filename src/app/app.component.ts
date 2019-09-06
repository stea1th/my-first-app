import {Input, Component} from '@angular/core';
import {ServerComponent} from './server/server.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() condition = true;
  num: number;
  @Input() stat: string;


  toggle() {
    this.condition = !this.condition;
    // Math.floor(Math.random() * 10) + 1;
    // this.stat = this.condition ? 'online' : 'offline';
  }

}
