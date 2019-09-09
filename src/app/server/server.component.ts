import {Component} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
      color: white;
  }
  `
  ]
})
export class ServerComponent {
  serverName: string;
  serverId: number;
  serverStatus: string;

  constructor() {
    this.serverId = Math.floor(Math.random() * 99 + 1);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getServerId() {
    return this.serverId;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'lightgreen' : '#FF007F';
  }
}
