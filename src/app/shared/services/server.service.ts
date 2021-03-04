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
    return [
      {path: 'main', icon: this.serverGetIcon, special: false, id: null},
      {path: 'test', icon: this.serverGetIcon, special: false, id: null},
      {path: 'discord', icon: this.serverGetIcon, special: false, id: null},
      {path: 'admin', icon: this.serverGetIcon, special: false, id: null},
      {path: 'create-server', icon: '3213213', special: true, id: null},
      {path: 'create-server', icon: '3213213', special: true, id: null},
      {path: 'create-server', icon: '3213213', special: true, id: null},
      {path: 'public-server', icon: '321312', special: true, id: null}
    ]
  }

  reateServer(server): Observable<any> {
    return this.http.post(`${environment.fbDbUrl}/servers.json`, server)
  }
}
