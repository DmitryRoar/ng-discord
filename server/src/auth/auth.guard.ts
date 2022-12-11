import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import {Observable} from 'rxjs'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Observable<boolean> {
    const req = context.switchToHttp().getRequest()
    const [typeToken, token] = req.headers.authorization.split(' ')
    if (typeToken !== 'Bearer' || !token) {
      return false
    }

    req.user = this.jwtService.verify(token)
    return true
  }
}
