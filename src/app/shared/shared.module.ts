import {NgModule} from '@angular/core'
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'

import {ImagesModule} from './images/images.module'

import {RefDirective} from './directives/ref.directive'

import {FooterComponent} from './components/footer/footer.component'

@NgModule({
  declarations: [
    FooterComponent,
    RefDirective
  ],
  imports: [
    HttpClientModule,
    ImagesModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    ImagesModule,
    FooterComponent,
    RefDirective
  ]
})
export class SharedModule {

}
