import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {UserEntity, UserRepository} from 'src/entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: UserRepository
  ) {}

  async getAll() {
    return this.userRepository.find()
  }
}
