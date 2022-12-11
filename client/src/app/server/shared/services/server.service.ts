import {Injectable} from '@angular/core'

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {environment} from '../../../../environments/environment'
import {IServer} from '../interfaces/server.interface'

@Injectable({providedIn: 'root'})
export class ServerService {
  serverGetIcon = '/assets/img/roar_white.png'

  constructor(private http: HttpClient) {}

  getAll(): IServer[] {
    // mock
    return [
      {path: 'main', icon: this.serverGetIcon, name: 'Test', id: '1'},
      {path: 'test', name: 'Барыга', icon: null, id: '2'},
      {path: 'discord', icon: this.serverGetIcon, name: 'Test2', id: '3'},
      {path: 'admin', icon: this.serverGetIcon, name: 'Test3', id: '4'},
      {path: 'test-discord', icon: this.serverGetIcon, name: 'Test4', id: '5'},
      {path: 'angular-clone', icon: null, name: 'Test532323', id: '6'},
      {path: 'discord-clone', icon: this.serverGetIcon, name: 'Test6', id: '7'},
      {
        path: 'hello-word-server',
        icon: this.serverGetIcon,
        name: 'Test7',
        id: '8',
      },
    ]
  }

  createServer(server): Observable<any> {
    return this.http.post(`${environment.fbDbUrl}/servers.json`, server)
  }

  getById(): any {
    return 'get by id'
  }
}
