import {RoleEnum} from 'src/shared/enums/role.enum'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Repository,
  UpdateDateColumn
} from 'typeorm'
import {ChatEntity} from './chat.entity'

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  email: string

  @Column({default: false})
  confirmedEmail: boolean

  @Column()
  password: string

  @Column({default: null})
  avatar: string

  @Column({default: 'offline', enum: ['online', 'idle', 'distrub', 'offline']})
  onlineStatus: string

  @Column({default: false})
  recieveEmail: boolean

  @OneToMany(() => ChatEntity, chat => chat.id)
  @JoinColumn()
  chat: number

  @Column({
    type: 'enum',
    enum: RoleEnum,
    array: true,
    default: [RoleEnum.USER]
  })
  roles: string[]

  @Column({default: null, type: 'json'})
  achievements: string[]

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date

  @UpdateDateColumn({type: 'timestamp'})
  updated_at: Date
}

export type UserRepository = Repository<UserEntity>
