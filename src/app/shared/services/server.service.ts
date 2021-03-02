import {Injectable} from '@angular/core'

@Injectable({providedIn: 'root'})
export class ServerService {
  serverGetIcon = 'serverGetIconHere'

  constructor() {
  }

  getAll(): object[] {
    return [
      {path: '', icon: this.serverGetIcon, id: null},
      {path: '', icon: this.serverGetIcon, id: null},
      {path: '', icon: this.serverGetIcon, id: null},
      {path: '', icon: this.serverGetIcon, id: null}
    ]
  }
}
