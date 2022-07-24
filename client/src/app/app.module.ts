import {BrowserModule} from '@angular/platform-browser'
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AppRoutingModule} from './app-routing.module'

import {SharedModule} from './shared/shared.module'

import {AppComponent} from './app.component'
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component'
import {HeaderComponent} from './shared/components/header/header.component'
import {ErrorPageComponent} from './error-page/error-page.component'
import {SideMenuComponent} from './shared/components/side-menu/side-menu.component'
import {HomePageComponent} from './home-page/home-page.component'
import {PublicServerPageComponent} from './public-server-page/public-server-page.component'
import {CreateServerComponent} from './shared/components/create-server/create-server.component'
import {FriendsPageComponent} from './friends-page/friends-page.component'
import {NitroPageComponent} from './nitro-page/nitro-page.component'
import {SubMenuComponent} from './shared/components/sub-menu/sub-menu.component'
import {DirectPageComponent} from './direct-page/direct-page.component'

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    ErrorPageComponent,
    SideMenuComponent,
    HomePageComponent,
    PublicServerPageComponent,
    CreateServerComponent,
    FriendsPageComponent,
    NitroPageComponent,
    SubMenuComponent,
    DirectPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
