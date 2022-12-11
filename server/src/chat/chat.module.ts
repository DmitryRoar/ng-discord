import {forwardRef, Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'

import {ChatEntity} from '../entities/chat.entity'

import {ChatController} from './chat.controller'

import {ChatGateway} from './chat.gateway'
import {ChatService} from './chat.service'

import {AuthGuard} from 'src/auth/auth.guard'
import {AuthModule} from 'src/auth/auth.module'
import {RoleGuard} from 'src/shared/guards/role.guard'

@Module({
  imports: [
    TypeOrmModule.forFeature([ChatEntity]),
    forwardRef(() => AuthModule)
  ],
  providers: [ChatService, ChatGateway, RoleGuard, AuthGuard],
  controllers: [ChatController]
})
export class ChatModule {}
