import {Component, OnInit} from '@angular/core'

import {ServerService} from '../../services/server.service'

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  servers: object[]

  constructor(
    private readonly serverService: ServerService
  ) {}

  ngOnInit(): void {
    this.servers = this.serverService.getAll()
  }

  createServer() {

  }
}
