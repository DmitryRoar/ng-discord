import {Injectable} from '@angular/core'
import {CanActivate, Router, RouterStateSnapshot} from '@angular/router'

import {ServerService} from '../services/server.service'
import {Observable} from 'rxjs'

@Injectable({providedIn: 'root'})
export class ServerGuard implements CanActivate {
  constructor(
    private readonly serverService: ServerService,
    private router: Router
  ) {
  }

  canActivate(
    _,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const route = state.url.slice(1)
    const correctServers = this.serverService
      .getAll()
      .some(server => server.path === route)

    if (!correctServers) {
      this.router.navigate(['/error'], {
        queryParams: {
          serverNotFound: true
        }
      })
      return false
    }
    return true
  }
}
