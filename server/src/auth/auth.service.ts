import {ForbiddenException, Injectable} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import {InjectRepository} from '@nestjs/typeorm'
import {Like} from 'typeorm'

import {SignupDto} from './dto/signup.dto'

import {UserEntity, UserRepository} from 'src/entities/user.entity'

import {IUser} from 'src/user/user.interface'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async validateUser(
    login: string,
    password: string
  ): Promise<Omit<UserEntity, 'password'> | null> {
    const user = await this.userRepository.findOne({
      where: [{email: Like(login)}, {username: Like(login)}],
    })
    if (user && user.password === password) {
      const {password, ...result} = user
      return result
    }
    return null
  }

  async signIn(
    user: IUser
  ): Promise<
    Omit<UserEntity, 'password'> | {access_token: string; data: IUser}
  > {
    const payload = {id: user.id, roles: user.roles}
    return {access_token: this.jwtService.sign(payload), data: user}
  }

  async signUp(dto: SignupDto): Promise<UserEntity> {
    const candidate = await this.userRepository.findOneBy({email: dto.email})
    if (candidate) {
      throw new ForbiddenException('USER IS EXIST')
    }

    return await this.userRepository.save(dto)
  }
}
