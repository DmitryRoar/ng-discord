import {CommonModule} from '@angular/common'
import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'

import {UiModule} from './ui/ui.module'

import {RefDirective} from './directives/ref.directive'

import {ChatComponent} from './components/chat/chat.component'
import {FooterComponent} from './components/footer/footer.component'

@NgModule({
  declarations: [FooterComponent, RefDirective, ChatComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, UiModule],
  exports: [
    HttpClientModule,
    FooterComponent,
    RefDirective,
    ChatComponent,
    UiModule,
  ],
})
export class SharedModule {}
