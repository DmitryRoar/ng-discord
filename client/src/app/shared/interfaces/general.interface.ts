type OnlineStatusType = 'online' | 'idle' | 'distrub' | 'offline'

export interface IUser {
  username: string
  tag: string
  status: string | null
  onlineStatus: OnlineStatusType
  id: string
  created_at: string
  avatar: string
}
