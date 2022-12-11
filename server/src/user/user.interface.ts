import {RoleEnum} from '../shared/enums/role.enum'

export interface IUser {
  id: number
  username: string
  email: string
  confirmedEmail: boolean
  avatar: string | null
  onlineStatus: 'online' | 'idle' | 'distrub' | 'offline'
  recieveEmail: boolean
  roles: RoleEnum[]
  achievements: any[] | null
}
