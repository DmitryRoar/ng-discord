import {Injectable} from '@angular/core'

import {IServer} from '../interfaces/server.interface'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {environment} from '../../../../environments/environment'

@Injectable({providedIn: 'root'})
export class ServerService {
  serverGetIcon = '/assets/img/roar_white.png'

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): IServer[] {
    // mock
    return [
      {path: 'server/main', icon: this.serverGetIcon, special: false, id: '1'},
      {path: 'server/test', text: 'Барыга', special: false, id: '2'},
      {path: 'server/discord', icon: this.serverGetIcon, special: false, id: '3'},
      {path: 'server/admin', icon: this.serverGetIcon, special: false, id: '4'},
      {path: 'server/test-discord', icon: this.serverGetIcon, special: true, id: '5'},
      {path: 'server/angular-clone', icon: this.serverGetIcon, special: true, id: '6'},
      {path: 'server/discord-clone', icon: this.serverGetIcon, special: true, id: '7'},
      {path: 'server/hello-word-server', icon: this.serverGetIcon, special: true, id: '8'}
    ]
  }

  createServer(server): Observable<any> {
    return this.http.post(`${environment.fbDbUrl}/servers.json`, server)
  }
}
