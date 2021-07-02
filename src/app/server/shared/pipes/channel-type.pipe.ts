import {Pipe, PipeTransform} from '@angular/core'

import {ChannelType, IListChannel} from '../interfaces/channel.interface'

@Pipe({
  name: 'channelType'
})
export class ChannelTypePipe implements PipeTransform {
  transform(channels: IListChannel[], type: ChannelType): IListChannel[] {
    return channels.filter(channel => channel.type.toLowerCase() === type.toLowerCase())
  }
}
