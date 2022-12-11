import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {SvgIconComponent} from './svg-icon/svg-icon.component'
import { AvatarComponent } from './avatar/avatar.component'

@NgModule({
  declarations: [
    SvgIconComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgIconComponent,
    AvatarComponent
  ]
})
export class ImagesModule {
}
