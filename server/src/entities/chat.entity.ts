import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Repository
} from 'typeorm'
import {UserEntity} from './user.entity'

@Entity()
export class ChatEntity {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => UserEntity, user => user.id)
  @JoinColumn()
  sender: number

  @ManyToMany(() => UserEntity, user => user.id)
  @JoinColumn()
  receiver: number

  @Column()
  message: string
}

export type ChatRepository = Repository<ChatEntity>
