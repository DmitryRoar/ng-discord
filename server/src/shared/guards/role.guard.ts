import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common'
import {Reflector} from '@nestjs/core'
import {Observable} from 'rxjs'
import {RoleEnum} from '../enums/role.enum'

// MUST USER @AuthGuard above controller
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles: string[] = this.reflector.getAllAndOverride<RoleEnum[]>(
      'roles',
      [context.getHandler(), context.getClass()]
    )
    const user = context.switchToHttp().getRequest().user
    return user.roles.some((role: string) => roles.includes(role))
  }
}
