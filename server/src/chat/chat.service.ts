import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Like} from 'typeorm'
import {ChatEntity, ChatRepository} from '../entities/chat.entity'
import {ChatGateway} from './chat.gateway'
import {SendMessageDto} from './dto/send-message.dto'

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatEntity)
    private readonly chatRepository: ChatRepository,
    private chatGateway: ChatGateway
  ) {}

  async send({message}: SendMessageDto, recevicerId: number, userId: number) {
    /*
      sender - from req.user
      receiver - param
      msg - dto
    */

    this.chatGateway.handleMessage(message)
    const newChat = this.chatRepository.create({
      message,
      sender: userId,
      receiver: recevicerId
    })
    return await this.chatRepository.save(newChat)
  }

  async getById(id: string) {
    return await this.chatRepository.findBy({receiver: Like(Number(id))})
  }

  async getAll() {
    return await this.chatRepository.find({})
  }
}
