import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

import {IChannel} from '../../interfaces/channel.interface'

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  channelInfo: IChannel

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: { channel: IChannel }) => {
      this.channelInfo = data.channel
    })
  }
}
