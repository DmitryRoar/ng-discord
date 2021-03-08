import {Injectable} from '@angular/core'

import {IGetAll} from '../interfaces/direct.interface'

@Injectable({providedIn: 'root'})
export class DirectService {
  constructor() {
  }

  getAll(): IGetAll[] {
    return [
      {name: 'Roar', avatar: 'empty', id: '1'},
      {name: 'Roar2', avatar: 'empty', id: '2'},
      {name: 'Roar3', avatar: 'empty', id: '3'},
      {name: 'Roar4', avatar: 'empty', id: '243'},
      {name: 'Roar5', avatar: 'empty', id: '5'}
    ]
  }
}
