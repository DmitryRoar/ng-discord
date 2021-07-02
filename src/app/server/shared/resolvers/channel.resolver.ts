import {Injectable} from '@angular/core'
import {ActivatedRouteSnapshot, Resolve} from '@angular/router'
import {Observable} from 'rxjs'

import {ChannelService} from '../services/channel.service'

import {IChannel} from '../interfaces/channel.interface'

@Injectable()
export class ChannelResolver implements Resolve<IChannel> {
  constructor(private channelService: ChannelService) {
  }

  resolve(route: ActivatedRouteSnapshot):
    Observable<IChannel> |
    Promise<IChannel> |
    IChannel {
    return this.channelService.getChannel(route.params.id)
  }
}
