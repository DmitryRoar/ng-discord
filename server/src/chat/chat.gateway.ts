import {Logger} from '@nestjs/common'
import {
  MessageBody,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse
} from '@nestjs/websockets'

const namespace = 'chat'

@WebSocketGateway({namespace})
export class ChatGateway implements OnGatewayInit, OnGatewayDisconnect {
  private logger = new Logger('ChatLogger')

  afterInit(): void {
    this.logger.log('CHAT GATEWAY INIT!')
  }

  handleDisconnect(): WsResponse<string> {
    this.logger.warn('USER DISCONNECTED')
    return {event: namespace, data: 'disconnect'}
  }

  @SubscribeMessage(namespace)
  handleMessage(@MessageBody('message') message: string): WsResponse<string> {
    return {event: namespace, data: message}
  }
}
