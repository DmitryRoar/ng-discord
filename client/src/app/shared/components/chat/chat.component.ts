import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'

import {IUser} from '../../interfaces/general.interface'
import {ChatService} from './chat.service'

interface IMessage {
  profile: IUser
  roles: string[] | null
  isSender: boolean
  data: {
    companion_id: number
    created_at: string
    message: string
  }[]
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService],
})
export class ChatComponent implements OnInit {
  iconSize = 'm'
  channelName = 'dmitryroar'

  emojis: string[] = ['']
  messages$: Observable<IMessage[]> = new Observable(sub => {
    sub.next([
      {
        isSender: true,
        data: [{msg: 'message from sender', date: Date.now().toString()}],
        roles: ['bot'],
        profile: {
          avatar:
            'https://play-lh.googleusercontent.com/2ApJ6jYkkzyCSUp01pE4xikW4FFUiwy_BcPRx9sjc-EXp6IjH2k7F32SuCHg6zEQf9A=w240-h480-rw',
          created_at: '3232',
          id: '1',
          username: 'sender',
          onlineStatus: 'online',
          status: null,
          tag: '3232',
        },
      },
      {
        isSender: false,
        data: [{msg: '323232', date: Date.now().toString()}],
        roles: [],
        profile: {
          avatar:
            'https://media.newyorker.com/photos/59095c67ebe912338a37455d/master/w_2560%2Cc_limit/Stokes-Hello-Kitty2.jpg',
          created_at: '3232',
          id: '2',
          username: 'me',
          onlineStatus: 'idle',
          status: 'hello',
          tag: '6363',
        },
      },
    ])
  })

  constructor(private readonly chatService: ChatService) {}

  ngOnInit(): void {
    console.log(this.chatService.get())
  }

  isBot(roles: string[]): boolean {
    return roles.includes('bot')
  }
}
