import {NgModule} from '@angular/core'
import {PreloadAllModules, RouterModule, Routes} from '@angular/router'

import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component'

import {ErrorPageComponent} from './error-page/error-page.component'
import {HomePageComponent} from './home-page/home-page.component'
import {PublicServerPageComponent} from './public-server-page/public-server-page.component'
import {ServerPageComponent} from './server-page/server-page.component'
import {ChannelPageComponent} from './channel-page/channel-page.component'
import {FriendsPageComponent} from './friends-page/friends-page.component'

import {ServerGuard} from './shared/guards/server.guard'
import {NitroPageComponent} from './nitro-page/nitro-page.component'

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '', component: HomePageComponent, children: [
          {path: 'friends', component: FriendsPageComponent},
          {path: 'nitro', component: NitroPageComponent},
          {path: 'channel/:id', component: ChannelPageComponent}
        ]
      },
      {path: 'public-server', component: PublicServerPageComponent},
      {path: 'server/:name', component: ServerPageComponent, canActivate: [ServerGuard]},
    ]
  },
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
