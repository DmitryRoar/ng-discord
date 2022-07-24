import {Injectable} from '@angular/core'

import {IDirect} from '../interfaces/direct.interface'

@Injectable({providedIn: 'root'})
export class DirectService {
  constructor() {
  }

  getAll(): IDirect[] {
    return [
      {name: 'Roar', route: 'direct', avatar: '/assets/img/roar_white.png', id: '1'},
      {name: 'Roar2', route: 'direct', avatar: '/assets/img/roar_white.png', id: '2'},
      {name: 'Roar3', route: 'direct', avatar: '/assets/img/roar_white.png', id: '3'},
      {name: 'Roar4', route: 'direct', avatar: '/assets/img/roar_white.png', id: '243'},
      {name: 'Roar5', route: 'direct', avatar: '/assets/img/roar_white.png', id: '5'}
    ]
  }
}
