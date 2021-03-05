import {Injectable} from '@angular/core'

import {IServer} from '../interfaces/server.interface'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {environment} from '../../../environments/environment'

@Injectable({providedIn: 'root'})
export class ServerService {
  serverGetIcon = 'serverGetIconHere'

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): IServer[] {
    // mock
    return [
      {path: 'server/main', icon: this.serverGetIcon, special: false, id: null},
      {path: 'server/test', icon: this.serverGetIcon, special: false, id: null},
      {path: 'server/discord', icon: this.serverGetIcon, special: false, id: null},
      {path: 'server/admin', icon: this.serverGetIcon, special: false, id: null},
      {path: 'server/test-discord', icon: '3213213', special: true, id: null},
      {path: 'server/angular-clone', icon: '3213213', special: true, id: null},
      {path: 'server/discord-clone', icon: '3213213', special: true, id: null},
      {path: 'server/hello-word-server', icon: '321312', special: true, id: null}
    ]
  }

  createServer(server): Observable<any> {
    return this.http.post(`${environment.fbDbUrl}/servers.json`, server)
  }
}
