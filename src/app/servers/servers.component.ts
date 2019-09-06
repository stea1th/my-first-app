import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Puki Server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(evt: MouseEvent) {
    console.log(evt.button);
    this.serverCreationStatus = 'Server was created';
  }

  // onUpdateServerName(evt: any) {
  //
  //   console.log(evt.target.value);
  //   this.serverName = evt.target.value;
  // }

}
