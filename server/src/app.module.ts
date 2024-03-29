import {Module} from '@nestjs/common'

import {TypeOrmModule} from '@nestjs/typeorm'

import {AppController} from './app.controller'
import {AppService} from './app.service'

import {AuthModule} from './auth/auth.module'
import {ChatModule} from './chat/chat.module'
import {UserModule} from './user/user.module'

import {configService} from './config/config.service'

@Module({
  imports: [
    ChatModule,
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
