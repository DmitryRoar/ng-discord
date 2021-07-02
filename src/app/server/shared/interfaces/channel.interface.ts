export type ChannelType = 'voice' | 'text'

export interface IListChannel {
  name: string
  type: ChannelType
  id: string
}

export interface IChannel {
  id: string
  name: string
  channels: IListChannel[]
}

export interface IDataChannel {
  text: ChannelType
  channels: IListChannel[]
}
