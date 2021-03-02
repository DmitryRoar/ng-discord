import {Injectable} from '@angular/core'

import {IServer} from '../interfaces/server.interface'

@Injectable({providedIn: 'root'})
export class ServerService {
  serverGetIcon = 'serverGetIconHere'

  constructor() {
  }

  getAll(): IServer[] {
    return [
      {path: 'main', icon: this.serverGetIcon, special: false, id: null},
      {path: 'test', icon: this.serverGetIcon, special: false, id: null},
      {path: 'discord', icon: this.serverGetIcon, special: false, id: null},
      {path: 'admin', icon: this.serverGetIcon, special: false, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'createnpmserver', icon: '3213213', special: true, id: null},
      {path: 'public-server', icon: '321312', special: true, id: null}
    ]
  }
}
