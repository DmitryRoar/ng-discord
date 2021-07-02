import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ServerRoutingModule} from './server-routing.module'

import {SharedModule} from '../shared/shared.module'

import {ServerGuard} from './shared/guards/server.guard'

import {ChannelResolver} from './shared/resolvers/channel.resolver'

import {ChannelTypePipe} from './shared/pipes/channel-type.pipe'

import {ServerPageComponent} from './server-page/server-page.component'
import {ChannelPageComponent} from './channel-page/channel-page.component'
import {SubMenuComponent} from './shared/components/sub-menu/sub-menu.component'
import {ChannelService} from './shared/services/channel.service';
import { ChannelListComponent } from './shared/components/channel-list/channel-list.component'

@NgModule({
  declarations: [
    ServerPageComponent,
    ChannelPageComponent,
    SubMenuComponent,
    ChannelTypePipe,
    ChannelListComponent
  ],
  imports: [
    CommonModule,
    ServerRoutingModule,
    SharedModule
  ],
  providers: [
    ServerGuard,
    ChannelService,
    ChannelResolver
  ]
})
export class ServerModule {
}
