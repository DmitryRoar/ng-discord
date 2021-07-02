import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'

import {IDataChannel} from '../../interfaces/channel.interface'

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelListComponent implements OnInit {
  @Input() data: IDataChannel

  constructor() {
  }

  ngOnInit(): void {
  }
}
