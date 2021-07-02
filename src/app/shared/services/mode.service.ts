import {Injectable} from '@angular/core'

import {IMode} from '../interfaces/mode.interface'

@Injectable({providedIn: 'root'})
export class ModeService {
  getAll(): IMode[] {
    return [
      {icon: 'nitro', name: 'Nitro', path: 'nitro'},
      {icon: 'person', name: 'Friends', path: 'friends'}
    ]
  }
}
