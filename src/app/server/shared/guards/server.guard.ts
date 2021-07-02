import {Injectable} from '@angular/core'
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router'
import {Observable} from 'rxjs'

import {ServerService} from '../services/server.service'

@Injectable()
export class ServerGuard implements CanActivate {
  constructor(
    private readonly serverService: ServerService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const findCorrectServer = this.serverService
      .getAll()
      .some(server => server.id === route.params.id)

    if (!findCorrectServer) {
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
