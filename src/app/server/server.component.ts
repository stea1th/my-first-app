import {Component} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 24;
  serverStatus = true;

  getServerStatus() {
    return this.serverStatus;
  }
}
