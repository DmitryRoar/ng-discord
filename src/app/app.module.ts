import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component'
import {HeaderComponent} from './shared/components/header/header.component'
import {AppRoutingModule} from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LeftMenuComponent } from './shared/components/left-menu/left-menu.component';
import { HomePageComponent } from './home-page/home-page.component'

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    ErrorPageComponent,
    LeftMenuComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
