import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards
} from '@nestjs/common'
import {AuthGuard} from 'src/auth/auth.guard'

import {ChatGateway} from './chat.gateway'
import {ChatService} from './chat.service'

import {SendMessageDto} from './dto/send-message.dto'

@UseGuards(AuthGuard)
@Controller('chat')
export class ChatController {
  constructor(private chatG: ChatGateway, private chatService: ChatService) {}

  @Post('send/:receiver')
  async message(
    @Body() dto: SendMessageDto,
    @Param('receiver') receiver: string,
    @Req() req: Request & {user: any}
  ) {
    return await this.chatService.send(dto, Number(receiver), req.user.id)
  }

  @Get('disconnect')
  disconnect() {
    return this.chatG.handleDisconnect()
  }

  @Get(':receiver')
  async getById(@Param('receiver') receiverId: string) {
    return await this.chatService.getById(receiverId)
  }

  @Get()
  async getAll() {
    return await this.chatService.getAll()
  }
}
