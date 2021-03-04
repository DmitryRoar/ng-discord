import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {AppComponent} from './app.component'
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component'
import {HeaderComponent} from './shared/components/header/header.component'
import {AppRoutingModule} from './app-routing.module'
import {ErrorPageComponent} from './error-page/error-page.component'
import {LeftMenuComponent} from './shared/components/left-menu/left-menu.component'
import {HomePageComponent} from './home-page/home-page.component'
import {PublicServerPageComponent} from './public-server-page/public-server-page.component';
import { ServerPageComponent } from './server-page/server-page.component'

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    ErrorPageComponent,
    LeftMenuComponent,
    HomePageComponent,
    PublicServerPageComponent,
    ServerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
