import {Module} from '@nestjs/common'
import {JwtModule} from '@nestjs/jwt'
import {PassportModule} from '@nestjs/passport'
import {TypeOrmModule} from '@nestjs/typeorm'

import {UserEntity} from 'src/entities/user.entity'

import {AuthController} from './auth.controller'

import {AuthService} from './auth.service'
import {LocalStrategy} from './strategies/passport.strategy'

@Module({
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    JwtModule.register({
      secret: 'supersecretjwt',
      signOptions: {expiresIn: '1h'}
    })
  ],
  exports: [JwtModule]
})
export class AuthModule {}
