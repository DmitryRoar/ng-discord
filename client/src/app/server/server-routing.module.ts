import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {ChannelResolver} from './shared/resolvers/channel.resolver'

import {ServerGuard} from './shared/guards/server.guard'

import {ServerPageComponent} from './server-page/server-page.component'
import {ChannelPageComponent} from './channel-page/channel-page.component'

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: ':id', component: ServerPageComponent, resolve: {channel: ChannelResolver}, canActivate: [ServerGuard], children: [
      {path: ':id', component: ChannelPageComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule {

}
