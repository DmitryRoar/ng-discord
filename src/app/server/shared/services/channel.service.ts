import {Injectable} from '@angular/core'
import {IChannel} from '../interfaces/channel.interface'

@Injectable()
export class ChannelService {
  constructor() {
  }

  getChannel(id: string): IChannel {
    // input id: string
    return {
      name: 'Барыга айфонов',
      id: '1',
      channels: [
        {name: 'voice1', type: 'voice', id: '1'},
        {name: 'text1', type: 'text', id: '3'},
        {name: 'voice2', type: 'voice', id: '4'},
        {name: 'voice3', type: 'voice', id: '5'},
        {name: 'text2', type: 'text', id: '6'},
      ]
    }
  }
}
