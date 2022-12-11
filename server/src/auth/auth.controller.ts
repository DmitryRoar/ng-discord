import {Body, Controller, Post, Req, UseGuards} from '@nestjs/common'
import {AuthGuard} from '@nestjs/passport'

import {LocalStrategy} from './strategies/passport.strategy'

import {AuthService} from './auth.service'

import {SignupDto} from './dto/signup.dto'

import {IUser} from 'src/user/user.interface'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard(LocalStrategy.key))
  @Post('sign-in')
  async signIn(@Req() req: Request & {user: IUser}) {
    return await this.authService.signIn(req.user)
  }

  @Post('sign-up')
  async signUp(@Body() dto: SignupDto) {
    return await this.authService.signUp(dto)
  }
}
